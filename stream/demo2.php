<?php

$fp = stream_socket_client(
    'tcp://10.100.106.13:8400',
    $error_code,
    $error_message,
    5,
    STREAM_CLIENT_CONNECT
);

if (!$fp) {
    echo "$errstr ($errno)";
} else {
    $request_header = "GET /api/notifications/count HTTP/1.0\r\n";
    $request_header .= "Host: 10.100.106.13:8400\r\n";
    $request_header .= "Accept: */*\r\n";
    $request_header .= "Cookie: token=a0d4846780644d272b34818a96118281\r\n";
    $request_header .= "\r\n";

    fwrite($fp, $request_header);

    while (!feof($fp)) {
        echo fgets($fp, 10);
    }
    fclose($fp);
}
