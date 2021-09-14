<?php

use React\MySQL\QueryResult;

require __DIR__ . '/../vendor/autoload.php';

$http = new React\Http\HttpServer(function (Psr\Http\Message\ServerRequestInterface $request) {

    foreach ($request->getHeaders() as $key => $item) {
        echo $key, ': ', implode(';', $item), PHP_EOL;
    }
    echo PHP_EOL;

    $factory = new React\MySQL\Factory();
    $connection = $factory->createLazyConnection('root:123456@localhost/demo');

    return $connection->query('select sleep(1), now()')->then(
        function (QueryResult $command) {
            return $command->resultRows;
        }
    )->then(function ($row0) use ($connection) {
        return $connection->query('select sleep(1), now()')->then(function (QueryResult $command) use ($row0) {
            return array_merge($row0, $command->resultRows);
        });
    })->then(function ($result) use ($connection) {
        $connection->quit();
        return var_export($result, true);
    })->then(function ($export) {
        return $response = new React\Http\Message\Response(
            200,
            ['Content-Type' => 'text/plain'],
            $export
        );
    });

});

$socket = new React\Socket\SocketServer('0.0.0.0:8100');
$http->listen($socket);