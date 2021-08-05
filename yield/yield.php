<?php
// function gen1() {
//   for( $i = 1; $i <= 10; $i++ ) {
//     echo "GEN1 : {$i}".PHP_EOL;
//     // sleep没啥意思，主要就是运行时候给你一种切实的调度感，你懂么
//     sleep( 1 );
//     // 这句很关键，表示自己主动让出CPU，我不下地狱谁下地狱
//     yield;
//   }
// }
// function gen2() {
//   for( $i = 1; $i <= 10; $i++ ) {
//     echo "GEN2 : {$i}".PHP_EOL;
//     // sleep没啥意思，主要就是运行时候给你一种切实的调度感，你懂么
//     sleep( 1 );
//     // 这句很关键，表示自己主动让出CPU，我不下地狱谁下地狱
//     yield;
//   }
// }
// $task1 = gen1();
// $task2 = gen2();
// while( true ) {
//   // 首先我运行task1，然后task1主动下了地狱
//   echo $task1->current();
//   // 这会儿我可以让task2介入进来了
//   echo $task2->current();
//   // task1恢复中断
//   $task1->next();
//   // task2恢复中断
//   $task2->next();
// }


$ch1 = curl_init();
// 这个地址中的php，我故意sleep了5秒钟，然后输出一坨json
curl_setopt( $ch1, CURLOPT_URL, "http://www.selfctrler.com/index.php/test/test1" );
curl_setopt( $ch1, CURLOPT_HEADER, 0 );
$mh = curl_multi_init();
curl_multi_add_handle( $mh, $ch1 );

// gen1中就是调用三方API，基于multi-curl实现
function gen1( $mh, $ch1 ) {
  do {
    $mrc = curl_multi_exec( $mh, $running );
    // 请求发出后，让出cpu
    $rs = yield;
    // 生产环境千万别这么干......
    // 这里加sleep是为了让你看的更清楚流程
    sleep( 1 );
    echo "收到外部发送数据{$rs}".PHP_EOL;    
  } while( $running > 0 );
  $ret = curl_multi_getcontent( $ch1 );
  echo $ret.PHP_EOL;
  return false;
}

// gen2是写文件...
function gen2() {
  for ( $i = 1; $i <= 10; $i++ ) {
    echo "gen2 : {$i}".PHP_EOL;
    file_put_contents( "./yield.log", "gen2".$i.PHP_EOL, FILE_APPEND );
    $rs = yield;
    // 生产环境千万别这么干......
    // 这里加sleep是为了让你看的更清楚流程
    sleep( 1 );
    echo "收到外部发送数据{$rs}".PHP_EOL;    
  }
}

$gen1 = gen1( $mh, $ch1 );
$gen2 = gen2();
while( true ) {
  echo $gen1->current();
  echo $gen2->current();
  $gen1->send("gen1");
  $gen2->send("gen2");
}