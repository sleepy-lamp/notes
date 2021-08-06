<?php

error_reporting(E_ALL);

set_time_limit(0);

$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

$address = '0.0.0.0';
$port = 8400;

socket_bind($sock, $address, $port);

socket_listen($sock);

while (true) {
    $new_sock = socket_accept($sock);


    $data_from_client = socket_read($new_sock, 2048);
    echo $data_from_client, '|';
    socket_write($new_sock, 'Msg from server.');
    
}

socket_close($sock);