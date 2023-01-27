<?php

use React\EventLoop\ExtEventLoop;
use React\EventLoop\Loop;
use React\Promise\Promise;

require __DIR__ . '/../vendor/autoload.php';

$beginTime = time();

$fun = getopt('f:')['f'] ?? null;

if (!empty($fun) && function_exists($fun)) {
    $fun();
}

function a()
{
    $server = stream_socket_server('tcp://0.0.0.0:8100');
    stream_set_blocking($server, false);


    Loop::addReadStream($server, function ($server) {
        $conn = stream_socket_accept($server);
        $data = "HTTP/1.1 200 OK\r\nContent-Length: 3\r\n\r\nHi\n";
        Loop::addWriteStream($conn, function ($conn) use (&$data) {

            $written = fwrite($conn, $data);
            if ($written === strlen($data)) {
                fclose($conn);
                Loop::removeWriteStream($conn);
            } else {
                $data = substr($data, $written);
            }
        });
    });
}

function b()
{
    Loop::addPeriodicTimer(5, function () {
        $memory = memory_get_usage() / 1024;
        $formatted = number_format($memory, 3) . 'K';
        echo "Current memory usage: {$formatted}\n";
    });
}

function c()
{
    $server = stream_socket_server('tcp://0.0.0.0:8100');
    stream_set_blocking($server, true);
    $conn = stream_socket_accept($server);

    $eventConfig = new EventConfig();
    $eventBase = new EventBase($eventConfig);

    $event = new Event(
        $eventBase,
        $conn,
        Event::PERSIST | Event::READ,
        function ($conn) {
            echo fread($conn, 1000);
        }
    );

    $event->add();

    $eventBase->loop();
}

function d()
{

    class MyExtEventLoop
    {
        public $eventBase;

        private $events = [];

        public function __construct()
        {
            $config = new EventConfig();
            $this->eventBase = new EventBase($config);
        }

        public function addReadStream($stream, $listener)
        {
            $event = new Event($this->eventBase, $stream, Event::PERSIST | Event::READ, $listener);
            $event->add();
            $this->events[] = $event;
        }

        public function run()
        {
            $this->eventBase->loop();
        }
    }

    $server = stream_socket_server('tcp://0.0.0.0:8100');
    stream_set_blocking($server, true);
    $conn = stream_socket_accept($server);

    $myLoop = new MyExtEventLoop();

    $myLoop->addReadStream($conn, function ($stream) use ($myLoop) {
        $data = fread($stream, 1024);
        echo $data;
    });

    $myLoop->eventBase->loop();
}


function e()
{
    $server = stream_socket_server('tcp://0.0.0.0:8100');
    stream_set_blocking($server, true);
    $conn = stream_socket_accept($server);

    $loop = new ExtEventLoop();
    $loop->addReadStream($conn, function ($conn) use ($loop) {
        echo $data = fread($conn, 1000);
    });
    $loop->run();
}

function f()
{

    class MyExtEventLoop
    {
        public $eventBase;

        private $events = [];

        private $readRefs = [];

        public function __construct()
        {
            $config = new EventConfig();
            $this->eventBase = new EventBase($config);
        }

        public function addReadStream($stream, $listener)
        {
            $event = new Event($this->eventBase, $stream, Event::PERSIST | Event::READ, $listener);
            $event->add();
            $key = intval($stream);
            $this->events[$key] = $event;
            /** 不保存stream会丢失 */
            if (\PHP_VERSION_ID >= 70000) {
                $this->readRefs[$key] = $stream;
            }
        }

        public function run()
        {
            $this->eventBase->loop();
        }
    }


    $server = stream_socket_server('tcp://0.0.0.0:8100');
    stream_set_blocking($server, false);

    $loop = new MyExtEventLoop();

    $loop->addReadStream($server, function ($server) use ($loop) {
        $conn = stream_socket_accept($server);
        var_dump($conn);
        $loop->addReadStream($conn, function ($conn) {
            echo $data = fread($conn, 1000);
            if (feof($conn)) {
                // todo 移除监听、
                echo 'closed.', PHP_EOL;
            }
        });
    });

    $loop->eventBase->loop();
}


function g()
{
    $server = stream_socket_server('tcp://0.0.0.0:8100');
    stream_set_blocking($server, true);
    $conn = stream_socket_accept($server);

    $stream = new \React\Stream\ReadableResourceStream($conn);

    $stream->on('data', function ($data) use ($stream) {
        echo $data;
    });

    $stream->on('close', function () {
        echo 'closed.', PHP_EOL;
    });
}

function h()
{
    $deferred = new React\Promise\Deferred();

    $promise = $deferred->promise();

    $promise->then(function ($value) {
        echo $value;
    });

    $deferred->resolve('abc');
}

function i()
{
    React\Promise\Timer\sleep(1)->then(function () {
        echo 'Thanks for waiting!' . PHP_EOL;
    });
}

function j()
{
    $loop = new React\EventLoop\ExtEventLoop;

    $promise = new Promise(function ($resolve) use ($loop) {
        $loop->addTimer(2, $resolve);
    });

    $promise->then(function () {
        echo "Thanks for waiting!", PHP_EOL;
    });

    $loop->run();
}

function k()
{
    foreach (glob(__DIR__ . '/*') as $file) {
        if (!is_file($file)) continue;

        Moebius\Coroutine::go(function ($file) {
            echo basename($file) . " " . md5_file($file) . "\n";
        }, $file);
    }
}

function l()
{
    // Do something 10 times, once every second
    M\go(function () {
        for ($i = 0; $i < 10; $i++) {
            echo "Every second\n";
            M\sleep(1);
        }
    });

    M\go(function () {
        for ($i = 0; $i < 10; $i++) {
            echo "Every second - B\n";
            M\sleep(1);
        }
    });
}

function m()
{
    $stream = stream_socket_client("localhost:80", $errno, $errstr, 30, STREAM_CLIENT_ASYNC_CONNECT);
    $loop = new ExtEventLoop();
    $loop->addWriteStream($stream, function () use ($stream, $loop) {
        $request = "GET / HTTP/1.1\r\nHost: localhost\r\n\r\n";
        $written = fwrite($stream, $request);
        if ($written === strlen($request)) {
            $loop->removeWriteStream($stream);

            $loop->addReadStream($stream, function () use ($stream) {
                echo fread($stream, 1024);
            });
        }
        $request = substr($request, $written);
    });

    $loop->run();
}

function getLoop()
{
    static $loop;
    if (!$loop) {
        $loop = new ExtEventLoop();
    }
    
    return $loop;
}

function n()
{

    class Waiter
    {
        public function __construct(
            public $type,
            public $stream,
            public $content = '',
        ) {
            $this->listen();
        }

        public function listen()
        {
            $loop = getLoop();
            $fiber = Fiber::getCurrent();
            if ($this->type === 'write') {
                $request = $this->content;
                $loop->addWriteStream($this->stream, function () use ($fiber, $loop, &$request) {
                    $written = fwrite($this->stream, $request);
                    if ($written === strlen($request)) {
                        $loop->removeWriteStream($this->stream);
                        $fiber->resume();
                    }
                    $request = substr($request, $written);
                });
            } elseif ($this->type === 'read') {

                $loop->addReadStream($this->stream, function () use ($fiber, $loop) {
                    $response = fread($this->stream, 2000);
                    $this->content .= $response;
                    //todo if content-length === strlen(body)
                    //todo chunked
                    $fiber->resume($this->content);
                    $loop->removeReadStream($this->stream);
                });
            }
        }
    }




    for ($i = 0; $i < 500; $i++) {
        $fiber = new Fiber(function () use ($i) {
            $stream = stream_socket_client("redirect.prod.experiment.routing.cloudfront.aws.a2z.com:80", $errno, $errstr, 30, STREAM_CLIENT_ASYNC_CONNECT);

            Fiber::suspend(new Waiter('write', $stream, "GET /x.png HTTP/1.1\r\nHost: redirect.prod.experiment.routing.cloudfront.aws.a2z.com\r\n\r\n"));

            $response = Fiber::suspend(new Waiter('read', $stream));

            echo "No.$i", PHP_EOL, $response;

            fclose($stream);
        });

        $fiber->start();
    }

    getLoop()->run();
}

function o()
{
    function waiter($type, $stream, $content = '')
    {
        $loop = getLoop();
        $fiber = Fiber::getCurrent();
        if ($type === 'write') {
            $request = $content;
            $loop->addWriteStream($stream, function () use ($fiber, $loop, $stream, &$request) {
                $written = fwrite($stream, $request);
                if ($written === strlen($request)) {
                    $loop->removeWriteStream($stream);
                    $fiber->resume();
                }
                $request = substr($request, $written);
            });
        } elseif ($type === 'read') {

            $loop->addReadStream($stream, function () use ($fiber, $stream, $content, $loop) {
                $response = fread($stream, 2000);
                $content .= $response;
                //todo if content-length === strlen(body)
                //todo chunked
                $fiber->resume($content);
                $loop->removeReadStream($stream);
            });
        }
    }


    for ($i = 0; $i < 1; $i++) {

        $fiber = new Fiber(function () use ($i) {
            $stream = stream_socket_client("redirect.prod.experiment.routing.cloudfront.aws.a2z.com:80", $errno, $errstr, 30, STREAM_CLIENT_ASYNC_CONNECT);

            Fiber::suspend(waiter('write', $stream, "GET /x.png HTTP/1.1\r\nHost: redirect.prod.experiment.routing.cloudfront.aws.a2z.com\r\n\r\n"));

            $response = Fiber::suspend(waiter('read', $stream));

            echo "No.", $i, PHP_EOL, $response;

            fclose($stream);
        });

        $fiber->start();
    }

    getLoop()->run();
}


function p()
{

    function write($stream, $content)
    {
        $loop = getLoop();
        $fiber = Fiber::getCurrent();
        $request = $content;

        $loop->addWriteStream($stream, function () use ($fiber, $loop, $stream, &$request) {
            $written = fwrite($stream, $request);
            if ($written === strlen($request)) {
                $loop->removeWriteStream($stream);
                $fiber->resume();
            }
            $request = substr($request, $written);
        });

        return Fiber::suspend();
    }


    function read($stream)
    {
        $loop = getLoop();
        $fiber = Fiber::getCurrent();

        $loop->addReadStream($stream, function () use ($fiber, $stream, $loop) {
            $response = fread($stream, 2000);
            $fiber->resume($response);
            $loop->removeReadStream($stream);
        });

        return $fiber->suspend();
    }


    $j = 0;
    for ($i = 0; $i < 40; $i++) {

        $fiber = new Fiber(function () use ($i, &$j) {
            $stream = stream_socket_client("www.vivid-light.ml:80", $errno, $errstr, 30, STREAM_CLIENT_ASYNC_CONNECT);

            // echo "No.", $i, ' ';

            write($stream, "GET /$i HTTP/1.1\r\nHost: www.vivid-light.ml\r\n\r\n");

            $response = read($stream);

            // echo "No.", $i, $response;

            echo "\r", $j++;

            fclose($stream);
        });

        $fiber->start();
    }

    getLoop()->run();
}

function q()
{
    $j = 0;
    $curl = curl_init();
    for ($i = 0; $i < 40; $i++) {
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'www.vivid-light.ml',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => false,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'Cookie: XDEBUG_SESSION=PHPSTORM'
            ),
        ));
    
        $response = curl_exec($curl);
        // echo "No.", $i, $response;
        echo "\r", $j++;
    }
    curl_close($curl);
}




echo PHP_EOL, 'time: ', time() - $beginTime;

