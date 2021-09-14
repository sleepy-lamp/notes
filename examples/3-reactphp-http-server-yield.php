<?php


use React\MySQL\QueryResult;
use React\Promise\Promise;
use React\Promise\PromiseInterface;

require __DIR__ . '/../vendor/autoload.php';


class Schedule
{
    /** @var Generator */
    protected $task;

    /** @var PromiseInterface */
    protected $prevPromise;

    public static function get()
    {
        return new static();
    }

    public function addTask(Generator $task)
    {
        $promise = $task->current();
        $promise = $promise->then(function (QueryResult $command) use ($task) {
            return $task->send($command);
        });
        $promise = $promise->then(function (QueryResult $command) use ($task) {
            return $task->send($command);
        });
        return $promise;

//        $this->task = $task;
//        $promise = $this->task->current();
//        $promise = $this->pipe($promise);
//        return $promise;
    }

    public function pipe($promise)
    {
        return $promise->then(function (...$args) {
            $promise = $this->task->send(...$args);
            if ($promise instanceof PromiseInterface) {
                $this->prevPromise = $promise;
                return $this->pipe($promise);
            } else {
                return $this->prevPromise;
            }
        });
    }
}


$http = new React\Http\HttpServer(function (Psr\Http\Message\ServerRequestInterface $request) {

    $task = (function () use ($request) {

        foreach ($request->getHeaders() as $key => $item) {
            echo $key, ': ', implode(';', $item), PHP_EOL;
        }
        echo PHP_EOL;

        $factory = new React\MySQL\Factory();
        $connection = $factory->createLazyConnection('root:123456@localhost/demo');

        $row0 = yield $connection->query('select 0 as no, sleep(1), now()');
        $row1 = yield $connection->query('select 1 as no, sleep(1), now()');

        $connection->quit();

        yield new Promise(function ($resolve, $reject) use ($row0, $row1) {
            $response = new React\Http\Message\Response(
                200,
                ['Content-Type' => 'text/plain'],
                var_export(array_merge($row0->resultRows, $row1->resultRows), true)
            );
            $resolve($response);
        });

    })();

    return Schedule::get()->addTask($task);

});

$socket = new React\Socket\SocketServer('0.0.0.0:8100');
$http->listen($socket);