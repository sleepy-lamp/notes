<?php
// $o_event_config = new EventConfig();
// // 通过requireFeatures方法来配置控制
// $o_event_config->requireFeatures( EventConfig::FEATURE_ET );
// //$o_event_config->requireFeatures( EventConfig::FEATURE_O1 );
// //$o_event_config->requireFeatures( EventConfig::FEATURE_FDS );
// $o_event_base = new EventBase( $o_event_config );
// // 通过getFeatures获取当前事件base的具体特性
// $i_features = $o_event_base->getFeatures();
// // 通过&方法，也就是与方法来判断选项是否开启
// ( $i_features & EventConfig::FEATURE_ET ) and print("ET - edge-triggered IO\n");
// ( $i_features & EventConfig::FEATURE_O1 ) and print("O1 - O(1) operation for adding/deletting events\n");
// ( $i_features & EventConfig::FEATURE_FDS ) and print("FDS - arbitrary file descriptor types, and not just sockets\n");
// $o_event_base->loop();


// $s_host = '0.0.0.0';
// $i_port = 8100;
// $r_listen_socket = socket_create( AF_INET, SOCK_STREAM, SOL_TCP );
// socket_set_option( $r_listen_socket, SOL_SOCKET, SO_REUSEADDR, 1 );
// socket_set_option( $r_listen_socket, SOL_SOCKET, SO_REUSEPORT, 1 );
// socket_bind( $r_listen_socket, $s_host, $i_port );
// socket_listen( $r_listen_socket );
// // 将$listen_socket设置为非阻塞IO
// socket_set_nonblock( $r_listen_socket );
// // 这两个数组级别的变量非常有意思
// // 一个用于保存event对象
// // 一个用于保存client的连接socket
// $a_event_array  = array();
// $a_client_array = array();
// // 创建event-base
// $o_event_base  = new EventBase();
// $s_method_name = $o_event_base->getMethod();
// // 确保自己用的是epoll 
// if ( 'epoll' != $s_method_name ) {
//    exit( "not epoll" );
// }
// // 在$listen_socket上添加一个 持久的读事件
// // 为啥是读事件？
// // 因为$listen_socket上发生事件就是：客户端建立连接
// // 所以，应该是读事件 
// // 而且，我们应该用上 PERSIST 将事件设置为持久事件
// $o_event = new Event( $o_event_base, $r_listen_socket, Event::READ | Event::PERSIST, function( $r_listen_socket, $i_event_flag, $o_event_base ) {
//     global $a_event_array;
//     global $a_client_array;
//     // socket_accept接受连接，生成一个新的socket，一个客户端连接socket
//     $r_connection_socket = socket_accept( $r_listen_socket );
//     // 注意这个操作：将客户端连接保存到数组...
//     // 如果没有这行，客户端连接上后自动断开...
//     $a_client_array[]    = $r_connection_socket;
//     // 在这个客户端连接socket上添加 持久的读事件
//     // 也就说 要从客户端连接上读取消息
//     $o_event = new Event( $o_event_base, $r_connection_socket, Event::READ | Event::PERSIST, function( $r_connection_socket ) {
//         $s_content = socket_read( $r_connection_socket, 1024 );
//         echo $s_content;

//         socket_write($r_connection_socket, "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: 5\r\n\r\nhello");
//         socket_close($r_connection_socket);
//     } );
//     $o_event->add();
//     // 注意这个操作：将事件保存到事件数组...
//     // 如果没有这行，那么事件会丢失，客户端发送的消息毛都收不到
//     $a_event_array[] = $o_event;
// }, $o_event_base );
// $o_event->add();
// // 注意这个操作：将事件保存到事件数组...
// $a_event_array[] = $o_event;
// // loop起来...
// $o_event_base->loop();


//$s_host = '0.0.0.0';
//$i_port = 8100;
//$r_listen_socket = socket_create( AF_INET, SOCK_STREAM, SOL_TCP );
//socket_set_option( $r_listen_socket, SOL_SOCKET, SO_REUSEADDR, 1 );
//socket_set_option( $r_listen_socket, SOL_SOCKET, SO_REUSEPORT, 1 );
//socket_bind( $r_listen_socket, $s_host, $i_port );
//socket_listen( $r_listen_socket );
//// 将$listen_socket设置为非阻塞IO
//socket_set_nonblock( $r_listen_socket );
//
//$a_event_array  = array();
//$a_client_array = array();
//
//// 创建event-base
//$o_event_base  = new EventBase();
//$s_method_name = $o_event_base->getMethod();
//if ( 'epoll' != $s_method_name ) {
//    exit( "not epoll" );
//}
//
//function read_callback( $r_connection_socket, $i_event_flag, $o_event_base ) {
//    $s_content = socket_read( $r_connection_socket, 1024 );
//    echo "接受到：".$s_content;
//    // 在这个客户端连接socket上添加 读事件
//    // 当这个客户端连接socket一旦满足可写条件，我们就可以向socket中写数据了
//    global $a_event_array;
//    global $a_client_array;
//    $o_write_event = new Event( $o_event_base, $r_connection_socket, Event::WRITE | Event::PERSIST, 'write_callback', array(
//        'content' => $s_content,
//    ) );
//    $o_write_event->add();
//    $a_event_array[ intval( $r_connection_socket ) ]['write'] = $o_write_event;
//}
//function write_callback( $r_connection_socket, $i_event_flag, $a_data ) {
//    global $a_event_array;
//    global $a_client_array;
//    $s_content = $a_data['content'];
//
//    // $s_content = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: 5\r\n\r\nhello";
//
//    foreach( $a_client_array as $r_target_socket ) {
//        if ( intval( $r_target_socket ) != intval( $r_connection_socket ) ) {
//            socket_write(
//                $r_target_socket,
//                 $s_content,
//                 strlen( $s_content ) );
//        }
//    }
//    $o_event = $a_event_array[ intval( $r_connection_socket ) ]['write'];
//    $o_event->del();
//    unset( $a_event_array[ intval( $r_connection_socket ) ]['write'] );
//}
//function accept_callback( $r_listen_socket, $i_event_flag, $o_event_base ) {
//    global $a_event_array;
//    global $a_client_array;
//    // socket_accept接受连接，生成一个新的socket，一个客户端连接socket
//    $r_connection_socket = socket_accept( $r_listen_socket );
//    $a_client_array[]    = $r_connection_socket;
//    // 在这个客户端连接socket上添加 读事件
//    // 也就说 要从客户端连接上读取消息
//    $o_read_event = new Event( $o_event_base, $r_connection_socket, Event::READ | Event::PERSIST, 'read_callback', $o_event_base );
//    $o_read_event->add();
//    $a_event_array[ intval( $r_connection_socket ) ]['read'] = $o_read_event;
//}
//
//// 在$listen_socket上添加一个 读事件
//// 为啥是读事件？
//// 因为$listen_socket上发生事件就是：客户端建立连接
//// 所以，应该是读事件
//$o_event = new Event( $o_event_base, $r_listen_socket, Event::READ | Event::PERSIST, 'accept_callback', $o_event_base );
//$o_event->add();
////$a_event_array[] = $o_event;
//$o_event_base->loop();

//$event_config = new EventConfig();
//$event_base = new EventBase($event_config);
//
//$s_method_name = $event_base->getMethod();
//if ('epoll' !== $s_method_name) {
//    exit('not epoll');
//}
//
//$event_arr = [];
//$socket_arr = [];
//
//for ($i = 0; $i < 5; $i++) {
//
//    $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
//    $socket_arr[(int)$socket] = $socket;
//
//    socket_connect($socket, 'localhost', 80);
//
//    $buffer = "GET /demo.php?i={$i} HTTP/1.1\r\n"
//        . "Host: localhost\r\n\r\n";
//
//    socket_write($socket, $buffer, strlen($buffer));
//
//    $callback = new class {
//        public $event;
//
//        public function __invoke($socket, $i_event_flag, $arg)
//        {
//            echo PHP_EOL, "第{$arg}个请求", PHP_EOL;
//            echo socket_read($socket, 1024), PHP_EOL;
//            echo "------------", PHP_EOL;
//            $this->event->free();
//        }
//    };
//
//    $event = new Event(
//        $event_base,
//        $socket,
//        Event::READ | Event::PERSIST,
//        $callback,
//        $i
//    );
//
//    $callback->event = $event;
//
//    $event->add();
//    $event_arr[] = $event;
//}
//
//$event_base->loop();


//require __DIR__ . '/../../vendor/autoload.php';
//
//
//$loop = new \React\EventLoop\ExtEventLoop();
//
//
//for($i = 0; $i < 5; $i++) {
//    echo $i, PHP_EOL;
//    $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
//    socket_connect($socket, 'localhost', 80);
//
//    $buffer = "GET /demo.php?i={$i} HTTP/1.1\r\nHost: localhost\r\n\r\n";
//    socket_write($socket, $buffer, strlen($buffer));
//
//    $loop->addReadStream($socket, function($socket) use ($loop, $i) {
//        echo "第{$i}个请求" , PHP_EOL, socket_read($socket, 1024), PHP_EOL;
//        $loop->removeReadStream($socket);
//    });
//}
//
//$loop->run();




require __DIR__ . '/../../vendor/autoload.php';

$loop = new \React\EventLoop\ExtEventLoop();


for($i = 0; $i < 4; $i++) {

    $task = (function() use ($i) {

        $socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
        socket_connect($socket, 'localhost', 80);

        $buffer = "GET /demo.php?i={$i}-0 HTTP/1.1\r\nHost: localhost\r\n\r\n";
        socket_write($socket, $buffer, strlen($buffer));

        $content = yield new Read($socket);
        echo "第{$i}个请求", PHP_EOL;
        echo $content, PHP_EOL;
        echo "-------------", PHP_EOL;

        if ($i % 2 === 0) {
            return;
        }

        $buffer = "GET /demo.php?i={$i}-1 HTTP/1.1\r\nHost: localhost\r\n\r\n";
        socket_write($socket, $buffer, strlen($buffer));

        $content = yield new Read($socket);
        echo "第{$i}个请求", PHP_EOL;
        echo $content, PHP_EOL;
        echo "-------------", PHP_EOL;

    })();

    $read = $task->current();

    $read->continue($task);

}



class Read {
    protected $socket;

    public function __construct($socket)
    {
        $this->socket = $socket;
    }

    public function continue($task)
    {
        global $loop;

        $loop->addReadStream($this->socket, function ($socket) use ($loop, $task) {
            $loop->removeReadStream($socket);
            $content = socket_read($socket, 1024);
            $foo = $task->send($content);
            if ($foo instanceof self) {
                $foo->continue($task);
            }
        });
    }
}


$loop->run();



