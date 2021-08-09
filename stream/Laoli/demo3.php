<?php

// 初始化一个空的EventConfig
// 用这个空的EventConfig初始化一个EventBase
// 空的虽然没用，但是可以演示基础用法
$o_event_config = new EventConfig();
$o_event_base = new EventBase( $o_event_config );
// 初始化一个 timer类型的Event
// 注意Event的参数：EventBase $base,mixed $fd,int $what,callable $cb [, mixed $arg = NULL ] )
// 第一个参数：就是EventBase
// 第二个参数：PHP中的stream、socket fd等，如果为event为信号类型那么
// 就是信号名比如SIGHUP、SIGSTOP，如果为时间类型为则为-1
// 第三个参数：event-flag，读就是Event::READ写为Event::WRITE
// Event::SIGNAL表示为信号类型事件，Event::TIMEOUT则表示时间事件
// 值得注意的是，这个地方有一个叫做 Event::PERSIST 的参数，这个参数表示持续
// 如果不加这个参数，这个定时器不会持久，只会执行一次
// 第四个参数：回调函数
// 第五个参数：传递给回调函数的参数
$o_timer_event = new Event( $o_event_base, -1, Event::TIMEOUT | Event::PERSIST, function() {
    sleep(1);
  echo "bingo".PHP_EOL;
} );
// add函数的参数是可选的，参数是一个超时时间
// add函数最大的作用就是将事件挂起准备执行
// 就类似于飞机到航母的弹射器上，准备起飞
// 官方说法叫做：使事件pending起来
$o_timer_event->add( 0.701 );
// 让event_base loop起来～～～我跟你说，你就当是while（true）就行
$o_event_base->loop();