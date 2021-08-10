<?php
use React\EventLoop\Loop;

require __DIR__ . '/../vendor/autoload.php';

$server = stream_socket_server('tcp://0.0.0.0:8100');
stream_set_blocking($server, false);

$request_num = 0;

Loop::addReadStream($server, function ($server) use(&$request_num) {
    $conn = stream_socket_accept($server);
    $data = "HTTP/1.1 200 OK\r\nContent-Length: 3\r\n\r\nHi\n";
    Loop::addWriteStream($conn, function ($conn) use (&$data, &$request_num) {
        
        $written = fwrite($conn, $data);
        if ($written === strlen($data)) {
            fclose($conn);
            Loop::removeWriteStream($conn);
            echo $request_num++ , PHP_EOL;
        } else {
            $data = substr($data, $written);
        }
    });
});

// Loop::addPeriodicTimer(5, function () {
//     $memory = memory_get_usage() / 1024;
//     $formatted = number_format($memory, 3).'K';
//     echo "Current memory usage: {$formatted}\n";
// });