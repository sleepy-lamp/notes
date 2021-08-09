<?php

$host = '0.0.0.0';
$port = 8100;
$listen_socket = socket_create( AF_INET, SOCK_STREAM, SOL_TCP );

// 如果你对之前的文章中的内容真的动手实践了的话，你就有一定概率
// 会遇到这个错误提示：address already in use
// 将SO_REUSEADDR设置为1，这样这个地址就可以被反复使用了
socket_set_option( $listen_socket, SOL_SOCKET, SO_REUSEADDR, 1 );
// 将SO_REUSEPORT设置为1，可以重复利用某个端口
socket_set_option( $listen_socket, SOL_SOCKET, SO_REUSEPORT, 1 );
socket_bind( $listen_socket, $host, $port );
socket_listen( $listen_socket );
// 将listen-socket设置为非阻塞
socket_set_nonblock( $listen_socket );
socket_getsockname( $listen_socket, $addr, $port );
echo 'Chatroom - '.$addr.':'.$port.PHP_EOL;
// 将listen-socket加入到client数组中
$client = array( $listen_socket );
while ( true ) {
    // 将client赋值给read
    // 由于client中包含listen-socket
    // 所以read中也会包含listen-socket
    // 为什么还需要一个client数组呢？
    // 因为select会修改read中，所以client相当于是
    // 一种备份。client中保存的就是你所有想要监听
    // 的socket，但是并不是每个socket都会有可读发生
    // 但是select会修改read数组，将可读的socket
    // 保存到read中，下次循环重新开始的时候，read需要
    // 从client中再次将所有需要监听可读的socket全部
    // 拿过来
    // 如果你没看明白，看看我上面函数原型里的注释
    $read      = $client;
    $write     = array();
    $exception = array();
    // ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
    // 注意，系统会被阻塞在socket_select()上
    // 一直到有 可读、可写等事件发生的时候
    // 调用才会返回，并同时将可读、可写等数据自动保存
    // 到read、write等数组中，ret返回结果是可读可写等
    // 数量。
    // 对于listen-socket而言，select会调用方监控
    // 发生在listen-socket上的可读事件，即有新客户端连接
    // 连接上来了
    $ret       = socket_select( $read, $write, $exception, NULL );
    //print_r( $read );
    //echo "select-loop : {$ret}".PHP_EOL.PHP_EOL.PHP_EOL;
    if ( $ret <= 0 ) {
        continue;
    }
    // 就是说，如果 listen-socket 中有事件，listen-socket能有啥事件：就是用新的客户端来了
    if ( in_array( $listen_socket, $read ) ) {
        $connection_socket = socket_accept( $listen_socket );
        if ( !$connection_socket ) {
            continue;
        }
        socket_getpeername( $connection_socket, $client_ip, $client_port );
        echo "Client {$client_ip}:{$client_port}".PHP_EOL;
        // 将新连接上来的客户端的socket保存到client中
        $client[] = $connection_socket;
        // 将listen-socket从read中手工移除掉，因为后面
        // 要开始从connection-socket中读取数据了
        // listen-socket上只能做accept操作不能做read操作
        $key    = array_search( $listen_socket, $read );
        unset( $read[ $key ] );
    }
    // 对于其他的connection-socket
    foreach( $read as $read_key => $read_fd ) {
        // 读取数据吧～～～
        socket_recv( $read_fd, $recv_content, 1024, 0 );
        if ( !$recv_content ) {
            echo "客户端 {$read_fd} 丢失".PHP_EOL;
            unset( $client[ $read_key ] );
            socket_close( $read_fd );
            continue;
        }
        $recv_content = "{$read_fd}说：".$recv_content;
        // 将收到的消息广播给除了自己以外的其他所有在线客户端，其实也就是除了自己fd之外的其他所有fd
        foreach( $client as $fd_item ) {
            if ( $fd_item ==  $listen_socket ) {
                continue;
            }
            if ( $fd_item != $read_fd ) {
                echo "发送给{$read_fd}".PHP_EOL;
                socket_write( $fd_item, $recv_content, strlen( $recv_content ) );
            }
        }
        // 下面三行注释是啥意思？
        // 如果开着的话，客户端就会被断开连接了
        // 聊天室是需要长连接的，不能断开
        //unset( $client[ $read_key ] );
        //socket_shutdown( $read_fd );
        //socket_close( $read_fd );
    }
}