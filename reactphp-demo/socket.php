<?php
require __DIR__ . '/../vendor/autoload.php';

$socket = new React\Socket\SocketServer('127.0.0.1:8100');

$socket->on('connection', function (React\Socket\ConnectionInterface $connection) {


    $co = null;

    $connection->on('data', function ($data) use ($connection, &$co) {

//        var_dump($data);

        if (strpos($data, 'CONNECT') === 0) {

            $conn = new React\Socket\Connector(array(
                'tcp' => true,
                'tls' => false ,
                'unix' => false,
            ));


            $host = explode(' ', $data)[1];

            var_dump($host);


            $conn->connect("tcp://{$host}")->then(function (React\Socket\ConnectionInterface $socket) use ($connection, &$co) {

                $connection->write("HTTP/1.1 200 Connection Established\r\n\r\n");



                $co = $socket;
                $co->on('data', function ($data) use ($connection) {

                    var_dump($data);


                    $connection->write($data);

                });
            });


        } else {
            if (isset($co)) {

                $co->write($data);

            }
        }


//        $connection->close();
    });
});
