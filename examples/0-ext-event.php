<?php


$s_host = '0.0.0.0';
$i_port = 8001;

$r_listen_socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

socket_set_option($r_listen_socket, SOL_SOCKET, SO_REUSEPORT, 1);

socket_bind($r_listen_socket, $s_host, $i_port);
socket_listen($r_listen_socket);

socket_set_nonblock($r_listen_socket);

$a_event_array = [];
$a_client_array = [];

$o_event_config = new EventConfig();
$o_event_base = new EventBase($o_event_config);

$s_method_name = $o_event_base->getMethod();

if ('epoll' !== $s_method_name) {
    exit('not epoll');
}

$o_event = new Event(
    $o_event_base,
    $r_listen_socket,
    Event::READ | Event::PERSIST,
    function ($r_listen_socket, $i_event_flag, $o_event_base) {
        global $a_event_array, $a_client_array;

        echo 'Connected', PHP_EOL;

        $r_connect_socket = socket_accept($r_listen_socket);


        $o_event = new Event(
            $o_event_base,
            $r_connect_socket,
            Event::READ | Event::PERSIST,
            function($r_connect_socket)
            {
                $s_content = socket_read($r_connect_socket, 1024);
                echo $s_content;
                socket_write(
                    $r_connect_socket,
                    "HTTP/1.1 200 OK\r\nConnection: keep-alive\r\nContent-Type: text/plain\r\nContent-Length: 5\r\n\r\nHello"
                );
//                socket_close($r_connect_socket);

            }
        );

        $o_event->add();

        socket_getpeername($r_connect_socket, $address, $port);
        echo $address, ' ', $port, PHP_EOL;

        $a_client_array[] = $r_connect_socket;

        $a_event_array[] = $o_event;
    },
    $o_event_base
);

$o_event->add();

$a_event_array[] = $o_event;

$o_event_base->loop();