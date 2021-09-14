<?php

use React\MySQL\QueryResult;

require __DIR__ . '/../vendor/autoload.php';

$http = new React\Http\HttpServer(function (Psr\Http\Message\ServerRequestInterface $request) {


    $factory = new React\MySQL\Factory();
    $connection = $factory->createLazyConnection('root:123456@localhost/demo-zlh');

    $stream = new \React\Stream\ThroughStream();

    $connection->query('select sleep(1), now()')->then(
        function (QueryResult $command) {
            return $command->resultRows;
        }
    )->then(function($row0) use ($connection) {
        return $connection->query('select sleep(1), now()')->then(function (QueryResult $command) use($row0) {
             return array_merge($row0, $command->resultRows);
        });
    })->then(function ($result) use ($connection, $stream) {
        $stream->end(var_export($result, true));
        $connection->quit();
    });



    foreach ($request->getHeaders() as $key => $item) {
        echo $key, ': ', implode(';', $item), PHP_EOL;
    }
    echo PHP_EOL;

    return new React\Http\Message\Response(
        200,
        array(
            'Content-Type' => 'text/plain'
        ),
        $stream
    );
});

$socket = new React\Socket\SocketServer('0.0.0.0:8100');
$http->listen($socket);