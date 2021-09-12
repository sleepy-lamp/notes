<?php

require __DIR__ . '/../vendor/autoload.php';

$socket = new React\Socket\SocketServer('127.0.0.1:8200');

$socket->on('connection', function (React\Socket\ConnectionInterface $connection) {

    $context = new stdClass();

    $connection->on('data', function ($data) use ($connection, $context) {

        if (strpos($data, 'CONNECT') === 0) {
            $browser = new React\Socket\Connector(array(
                'tcp' => true,
                'tls' => false,
                'unix' => false,
            ));

            $host = explode(' ', $data)[1];

            $browser->connect("tcp://{$host}")->then(function (React\Socket\ConnectionInterface $socket) use ($connection, $context) {

                $connection->write("HTTP/1.1 200 Connection Established\r\n\r\n");

                $context->browse = $socket;

                $socket->on('data', function ($data) use ($connection) {
                    $connection->write($data);
                });
            });


        } else {
            $context->browse->write($data);
        }

    });
});
