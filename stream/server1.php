<?php

error_reporting(E_ALL);

set_time_limit(0);

/**
 * @property int id;
 */
class Task
{

    protected static $maxId = 0;

    /** @var int */
    protected $id;

    /** @var Generator */
    protected $generator;

    /** @var bool */
    protected $beforeFirstYield = true;

    protected $sendValue;

    public function __construct(Generator $generator)
    {
        $this->id = static::$maxId++;
        $this->generator = $generator;
        echo 'task-id: ', $this->id, PHP_EOL;
    }

    public function __get($key)
    {
        return $key === 'id' ? $this->id : null;
    }

    public function setSendValue($sendValue)
    {
        $this->sendValue = $sendValue;
    }

    public function run()
    {
        if ($this->beforeFirstYield) {
            $this->beforeFirstYield = false;
            return $this->generator->current();
        } else {
            $ret = $this->generator->send($this->sendValue);
            $this->sendValue = null;
            return $ret;
        }
    }

    public function isFinished()
    {
        return !$this->generator->valid();
    }

}

class Scheduler
{
    /** @var Task[] */
    protected $taskQueue;

    private static $instance;

    public static function getInstance()
    {
        return self::$instance ?? self::$instance = new self();
    }

    public function __construct()
    {
        $this->taskQueue = new SplQueue();
    }

    public function addTask(Task $task)
    {
        $this->taskQueue->enqueue($task);
    }

    public function isTaskEmpty()
    {
        return $this->taskQueue->isEmpty();
    }

    public function dispatch()
    {
        while (!$this->taskQueue->isEmpty()) {

            $task = $this->taskQueue->dequeue();
            $retVal = $task->run();

            if ($retVal instanceof SystemCall) {
                $retVal($task);
                continue;
            }

            if (!$task->isFinished()) {
                $this->addTask($task);
            }
        }
    }
}


class SystemCall
{
    protected $socket;
    protected $task;
    protected $type;
    protected $content;

    public function __construct($socket, $type, $content = null)
    {
        $this->socket = $socket;
        $this->type = $type;
        $this->content = $content;
    }

    public function __invoke($task)
    {
        $this->task = $task;

        if ($this->type == 'read') {
            IO::getInstance()->addTaskWaitingRead($this->socket, $this->task);
        } elseif ($this->type == 'write') {
            IO::getInstance()->addTaskWaitingWrite($this->socket, $this->task, $this->content);
        }

    }

    public static function readSocket($socket)
    {
        return new static($socket, 'read');
    }

    public static function writeSocket($socket, $content)
    {
        return new static($socket, 'write', $content);
    }

    public static function newTask(Task $task)
    {
        Scheduler::getInstance()->addTask($task);
        return true;
    }
}

class IO
{
    protected $waitForRead = [];

    protected $waitForWrite = [];

    private static $instance;

    public function __construct()
    {
    }

    public static function getInstance()
    {
        return self::$instance ?? self::$instance = new self();
    }

    public function addTaskWaitingRead($socket, Task $task)
    {
        $this->waitForRead[intval($socket)][0] = $socket;
        $this->waitForRead[intval($socket)][1][] = $task;
    }

    public function addTaskWaitingWrite($socket, Task $task, $content)
    {
        $this->waitForWrite[intval($socket)][0] = $socket;
        $this->waitForWrite[intval($socket)][1][] = [$task, $content];
    }

    public function poll($timeout = 0)
    {
        $reads = [];
        foreach ($this->waitForRead as [$socket,]) {
            $reads[] = $socket;
        }

        $writes = [];
        foreach ($this->waitForWrite as [$socket,]) {
            $writes[] = $socket;
        }

        $exceptions = [];

        if (!socket_select($reads, $writes, $exceptions, $timeout)) {
            return;
        }

        foreach ($reads as $read) {
            foreach ($this->waitForRead[intval($read)][1] as $task) {
                $task->setSendValue(socket_read($read, 1024));
                Scheduler::getInstance()->addTask($task);
            }
            unset($this->waitForRead[intval($read)]);
        }

        foreach ($writes as $write) {
            foreach ($this->waitForWrite[intval($write)][1] as [$task, $content]) {
                $task->setSendValue(socket_write($write, $content));
                Scheduler::getInstance()->addTask($task);
            }
            unset($this->waitForWrite[intval($write)]);
        }
    }
}


Scheduler::getInstance()->addTask(new Task((function () {

    $sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

    $address = '0.0.0.0';
    $port = 8400;

    socket_bind($sock, $address, $port);

    socket_listen($sock);

    while (true) {
        $client_sock = socket_accept($sock);
        $request = yield SystemCall::readSocket($client_sock);

        Scheduler::getInstance()->addTask(new Task((function () use ($client_sock, $request) {


            echo microtime(true), PHP_EOL;
            echo $request, PHP_EOL;

            $body = "Hello World!";
            $endLine = "\r\n";

            $response = "HTTP/1.1 200 ok" . $endLine;
            $response .= "Content-Type: text/plain" . $endLine;
            $response .= "Content-Length: " . strlen($body) . $endLine;
            $response .= $endLine;
            $response .= $body;

            yield SystemCall::writeSocket($client_sock, $response);

            socket_close($client_sock);
        })()));

    }

})()));


Scheduler::getInstance()->addTask(new Task(
    (function () {
        while (true) {
            $timeout = Scheduler::getInstance()->isTaskEmpty() ? null : 0;
            IO::getInstance()->poll($timeout);
            yield;
        }
    })()
));

Scheduler::getInstance()->dispatch();