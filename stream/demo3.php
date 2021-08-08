<?php

//$std = new \stdClass();
//$std2 = clone $std;
//echo spl_object_hash($std), PHP_EOL, spl_object_hash($std2);

//$a = [];
//
//$a[5][] = [1, 2];
//var_dump($a);


$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

$address = '0.0.0.0';
$port = 8400;

socket_bind($sock, $address, $port);

socket_listen($sock);

$client_socket = socket_accept($sock);

$reads = [$client_socket];
$e = [];
$writes = [];

socket_select($reads, $writes, $e, null);

var_dump($reads, $writes, $e);

socket_close($sock);

socket_close($client_socket);