<?php
require __DIR__ . '/../vendor/autoload.php';

$socket = new React\Socket\SocketServer('127.0.0.1:8100');

$socket->on('connection', function (React\Socket\ConnectionInterface $connection) {

    $context = new stdClass();
    $context->connection = $connection;

    $connection->on('data', function ($data) use ($context) {

        if (! property_exists($context, 'browse')) {
            $browser = new React\Socket\Connector(array(
                'tcp' => true,
                'tls' => true,
                'unix' => false,
            ));

            $browser->connect('tcp://ray.sleepy-light.ml:443')->then(function (React\Socket\ConnectionInterface $socket) use ($context, $data) {
                $context->browse = $socket;
                $context->browse->write($data);

                $socket->on('data', function ($data) use ($context) {
                    $context->connection->write($data);
                });

            });
        } else {
            $context->browse->write($data);
        }


    });

});
