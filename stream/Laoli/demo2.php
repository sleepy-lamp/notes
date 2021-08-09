<?php

class Http {
    // 定义下目前支持的http方法们，目前只支持get和post
    private static $a_method = array( 'get', 'post' );
    public static function decode( $s_raw_http_content ) {
        $s_http_method       = '';
        $s_http_version      = '';
        $s_http_pathinfo     = '';
        $s_http_querystring  = '';
        $s_http_body_boundry = '';  // 当post方法且为form-data的时候.
        $a_http_post         = array();
        $a_http_get          = array();
        $a_http_header       = array();
        $a_http_file         = array();
        // 先通过两个 \r\n\r\n 把 请求行+请求头 与 请求体 分割开来.
        list( $s_http_line_and_header, $s_http_body ) = explode( "\r\n\r\n", $s_raw_http_content, 2 );
        // 再分解$s_http_line_and_header数组
        // 数组的第一个元素一定是 请求行
        // 数组剩余所有元素就是 请求头
        $a_http_line_header = explode( "\r\n", $s_http_line_and_header );
        $s_http_line = $a_http_line_header[ 0 ];
        unset( $a_http_line_header[ 0 ] );
        $a_http_raw_header = $a_http_line_header;
        // 好了，请求行 + 请求头数组 + 请求体 都有了
        // 先从请求行分解 method + pathinfo + querystring + http版本
        list( $s_http_method, $s_http_pathinfo_querystring, $s_http_version ) = explode( ' ', $s_http_line );
        if ( false === strpos( $s_http_pathinfo_querystring, "?" ) ) {
            $s_http_pathinfo = $s_http_pathinfo_querystring;
        } else {
            list( $s_http_pathinfo, $s_http_querystring ) = explode( '?', $s_http_pathinfo_querystring );
        }
        // 处理querystring为数组
        if ( '' != $s_http_querystring ) {
            $a_raw_http_get = explode( '&', $s_http_querystring );
            foreach( $a_raw_http_get as $s_http_get_item ) {
                if ( '' != trim( $s_http_get_item ) ) {
                    list( $s_get_key, $s_get_value ) = explode( '=', $s_http_get_item );
                    $a_http_get[ $s_get_key ] = $s_get_value;
                }
            }
        }
        // 处理$s_http_header
        foreach( $a_http_raw_header as $a_raw_http_header_key => $a_raw_http_header_item ) {
            if ( '' != trim( $a_raw_http_header_item ) ) {
                list( $s_http_header_key, $s_http_header_value ) = explode( ":", $a_raw_http_header_item );
                $a_http_header[ strtoupper( $s_http_header_key ) ] = $s_http_header_value;
            }
        }

        // 如果是post方法，处理post body
        if ( 'post' === strtolower( $s_http_method ) ) {
            // post 方法里要关注几种不同的content-type
            // x-www-form-urlencoded
            if ( 'application/x-www-form-urlencoded' == trim( $a_http_header['CONTENT-TYPE'] ) ) {
                $a_http_raw_post = explode( "&", $s_http_body );
                // 解析http body
                foreach( $a_http_raw_post as $s_http_raw_body_item ) {
                    if ( '' != $s_http_raw_body_item ) {
                        list( $s_http_raw_body_key, $s_http_raw_body_value ) = explode( "=", $s_http_raw_body_item );
                        $a_http_post[ $s_http_raw_body_key ] = $s_http_raw_body_value;
                    }
                }
            }
            // form-data
            if ( false !== strpos( $a_http_header['CONTENT-TYPE'], 'multipart/form-data' ) ) {
                list( $s_http_header_content_type, $s_http_body_raw_boundry ) = explode( ';', $a_http_header['CONTENT-TYPE'] );
                $a_http_header['CONTENT-TYPE'] = trim( $s_http_header_content_type );
                list( $_temp_unused, $s_http_body_boundry ) = explode( '=', $s_http_body_raw_boundry );
                $s_http_body_boundry = '--'.$s_http_body_boundry;
                $a_http_raw_post     = explode( $s_http_body_boundry."\r\n", $s_http_body );
                foreach( $a_http_raw_post as $s_http_raw_body_item ) {
                    if ( '' != trim( $s_http_raw_body_item ) ) {
                        echo $s_http_raw_body_item;
                        //$a_http_raw_body_item = explode( ';', $s_http_raw_body_item );
                        // 判断是
                    }
                }
            }
        }

        // 整理数据
        $a_ret = array(
            'method'   => $s_http_method,
            'version'  => $s_http_version,
            'pathinfo' => $s_http_pathinfo,
            'post'     => $a_http_post,
            'get'      => $a_http_get,
            'header'   => $a_http_header,
        );
        return $a_ret;
    }


    public static function encode( $a_data ) {
        $s_data        = json_encode( $a_data );
        $s_http_line   = "HTTP/1.1 200 OK";
        $a_http_header = array(
            "Date"           => gmdate( "M d Y H:i:s", time() ),
            "Content-Type"   => "application/json",
            "Content-Length" => strlen( $s_data ),
        );
        $s_http_header = '';
        foreach( $a_http_header as $s_http_header_key => $s_http_header_item ) {
            $_s_header_line = $s_http_header_key.': '.$s_http_header_item;
            $s_http_header  = $s_http_header.$_s_header_line."\r\n";
        }
        $s_ret = $s_http_line."\r\n".$s_http_header."\r\n".$s_data;
        return $s_ret;
    }
}

$host = '0.0.0.0';
$port = 8100;
$listen_socket = socket_create( AF_INET, SOCK_STREAM, SOL_TCP );

socket_set_option( $listen_socket, SOL_SOCKET, SO_REUSEADDR, 1 );
socket_set_option( $listen_socket, SOL_SOCKET, SO_REUSEPORT, 1 );

socket_bind( $listen_socket, $host, $port );
socket_listen( $listen_socket );
socket_set_nonblock( $listen_socket );

socket_getsockname( $listen_socket, $addr, $port );
echo 'Select HTTP Server - '.$addr.':'.$port.PHP_EOL;

$client = array( $listen_socket );

while ( true ) {
    $read      = $client;
    $write     = array();
    $exception = array();
    $ret       = socket_select( $read, $write, $exception, NULL );
    //echo "select-loop : {$ret}".PHP_EOL.PHP_EOL.PHP_EOL;
    //print_r( $read );
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
        //echo "Client {$client_ip}:{$client_port}".PHP_EOL;
        $client[] = $connection_socket;
        $key      = array_search( $listen_socket, $read );
        unset( $read[ $key ] );
    }
    // 对于其他socket
    foreach( $read as $read_key => $read_fd ) {
        // 注意！这种获取HTTP数据的方式并不正确
        // 这种写法只能获取固定2048长度的数据
        // 正规正确的写法应该是通过content-length或者chunk size
        // 来获取完整http原始数据
        $ret = socket_recv( $read_fd, $recv_content, 2048, 0 );
        //var_dump( $ret );
        //echo $recv_content;
        $decode_ret = Http::decode( $recv_content );
        print_r( $decode_ret );

        $encode_ret = Http::encode( array(
            'username' => "wahaha",
        ) );
        socket_write( $read_fd, $encode_ret, strlen( $encode_ret ) );

        //socket_shutdown( $read_fd );
        socket_close( $read_fd );
        unset( $read[ $read_key ] );
        $key = array_search( $read_fd, $client );
        unset( $client[ $read_key ] );

    }
}