<?php
require __DIR__ . '/../vendor/autoload.php';

$socket = new React\Socket\SocketServer('127.0.0.1:8100');

$socket->on('connection', function (React\Socket\ConnectionInterface $connection) {
    $connection->on('data', function ($data)  {
        echo ($data);
    });
});
