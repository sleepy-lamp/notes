<?php

require_once __DIR__ . '/../vendor/autoload.php';

//$loop = new \React\EventLoop\ExtEventLoop();
//
//$tcpServer = new \React\Socket\TcpServer('tcp://0.0.0.0:8100', $loop);
//
//$tcpServer->on('connection', function(\React\Socket\ConnectionInterface $connection) {
//    echo intval($connection->stream), ' connected.', PHP_EOL;
//
//
//    $connection->on('data', function($data) use ($connection) {
//        echo intval($connection->stream), PHP_EOL, $data;
//        $connection->write("HTTP/1.1 200 OK\r\n");
//        $connection->write("content-type: text/plain\r\n");
//        $connection->write("content-length: 5\r\n");
//        $connection->write("connection: close\r\n");
//        $connection->write("\r\nhello");
//    });
//
//    $connection->on('close', function() use ($connection) {
//        echo intval($connection->stream), ' closed', PHP_EOL;
//    });
//
//});
//
//$loop->run();


class Server {
    public function __construct(public $a){}
    public function connection()
    {
        return Fiber::suspend($this);
    }
}

class Conn {
    public function __construct(public $connection){}
    public function data() {
        return Fiber::suspend($this);
    }
}
$loop = new \React\EventLoop\ExtEventLoop();
$tcpServer = new \React\Socket\TcpServer('tcp://0.0.0.0:8100', $loop);
$fiber = new Fiber(function() use ($tcpServer) {
    $conn = (new Server($tcpServer))->connection();
    $conn->connection->write("HTTP/1.1 200 OK\r\n");
    $conn->connection->write("content-type: text/plain\r\n");
    $conn->connection->write("content-length: 5\r\n");
    $conn->connection->write("connection: close\r\n");
    $conn->connection->write("\r\nhello");

    $data = $conn->data();
    echo $data;
});

$s = $fiber->start();


$s->a->on('connection', function($connection) use ($s, $fiber) {
    $conn = $fiber->resume(new Conn($connection));
    $conn->connection->on('data', function($data) use ($fiber) {
        echo '123', PHP_EOL;
        $fiber->resume($data);
    });
});
$loop->run();
