<?php


$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

$address = '0.0.0.0';
$port = 8406;

socket_bind($sock, $address, $port);

socket_listen($sock);

while (true) {
    $client_sock = socket_accept($sock);

    $request = socket_read($client_sock, 1024);

    echo date('Y-m-d H:i:s') , '|' , microtime(true), PHP_EOL;
    echo $request , PHP_EOL;

    $body = "Hello World!";
    $endLine = "\r\n";

    $response = "HTTP/1.1 200 ok" . $endLine;
    $response .= "Content-Type: text/plain" . $endLine;
    $response .= "Content-Length: " . strlen($body) . $endLine;
    $response .= $endLine;
    $response .= $body;

    socket_write($client_sock, $response);

    socket_close($client_sock);
}
