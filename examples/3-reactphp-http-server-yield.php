<?php

use React\MySQL\QueryResult;
use React\Promise\Promise;

require __DIR__ . '/../vendor/autoload.php';


class Schedule
{
    public static function addTask(Generator $task)
    {

        $promise = $task->current();
        $promise = $promise->then(function(QueryResult $command) use ($task) {
            return $task->send($command->resultRows);
        });
        $promise = $promise->then(function(QueryResult $command) use ($task) {
            return $task->send($command->resultRows);
        });
        return $promise;
    }
}



$http = new React\Http\HttpServer(function (Psr\Http\Message\ServerRequestInterface $request) {


    $task = (function () use ($request) {

        $factory = new React\MySQL\Factory();
        $connection = $factory->createLazyConnection('root:123456@localhost/demo');

        $row0 = yield $connection->query('select sleep(1), now()');
        $row1 = yield $connection->query('select sleep(1), now()');

        $connection->quit();

        yield new Promise(function ($resolve, $reject) use ($row0, $row1) {
            $response = new React\Http\Message\Response(
                200,
                ['Content-Type' => 'text/plain'],
                var_export(array_merge($row0, $row1), true)
            );
            $resolve($response);
        });


        foreach ($request->getHeaders() as $key => $item) {
            echo $key, ': ', implode(';', $item), PHP_EOL;
        }
        echo PHP_EOL;
    })();

    return Schedule::addTask($task);

});

$socket = new React\Socket\SocketServer('0.0.0.0:8100');
$http->listen($socket);