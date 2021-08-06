<?php

// 客户端代码
$client = stream_socket_client('tcp://127.0.0.1:9502');
if (!$client) {
    die("connect is failed");
}
 
fwrite($client, "client recv data ... \n");
$data = fread($client, 65535);
 
if (!$data) {
    die("client recv is failed");
}
 
var_dump($data);
 
fclose($client);