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


// $ch1 = curl_init();
// // 这个地址中的php，我故意sleep了5秒钟，然后输出一坨json
// curl_setopt( $ch1, CURLOPT_URL, "http://www.selfctrler.com/index.php/test/test1" );
// curl_setopt( $ch1, CURLOPT_HEADER, 0 );
// $mh = curl_multi_init();
// curl_multi_add_handle( $mh, $ch1 );

// // gen1中就是调用三方API，基于multi-curl实现
// function gen1( $mh, $ch1 ) {
//   do {
//     $mrc = curl_multi_exec( $mh, $running );
//     // 请求发出后，让出cpu
//     $rs = yield;
//     // 生产环境千万别这么干......
//     // 这里加sleep是为了让你看的更清楚流程
//     sleep( 1 );
//     echo "收到外部发送数据{$rs}".PHP_EOL;    
//   } while( $running > 0 );
//   $ret = curl_multi_getcontent( $ch1 );
//   echo $ret.PHP_EOL;
//   return false;
// }

// // gen2是写文件...
// function gen2() {
//   for ( $i = 1; $i <= 10; $i++ ) {
//     echo "gen2 : {$i}".PHP_EOL;
//     file_put_contents( "./yield.log", "gen2".$i.PHP_EOL, FILE_APPEND );
//     $rs = yield;
//     // 生产环境千万别这么干......
//     // 这里加sleep是为了让你看的更清楚流程
//     sleep( 1 );
//     echo "收到外部发送数据{$rs}".PHP_EOL;    
//   }
// }

// $gen1 = gen1( $mh, $ch1 );
// $gen2 = gen2();
// while( true ) {
//   echo $gen1->current();
//   echo $gen2->current();
//   $gen1->send("gen1");
//   $gen2->send("gen2");
// }

// function xrange($start, $end, $step = 1)
// {
//   for ($i = $start; $i <= $end; $i += $step) {
//     yield $i;
//   }
// }
// foreach (xrange(1, 1000000) as $num) {
//   echo $num, "\n";
// }

//$gen = (function () {
//    for ($i = 0; $i < 10; $i++) {
//        yield $i;
//    }
//})();


//$gen->next();

//echo $gen->current();

//function logger($fileName) {
//    $fileHandle = fopen($fileName, 'a');
//    while (true) {
//        fwrite($fileHandle, yield . "\n");
//    }
//}
//$logger = logger(__DIR__ . '/log');
//$logger->send('Foo');
//$logger->send('Bar');

//function gen() {
//    $ret = (yield 'yield1');
//    var_dump($ret);
//    $ret = (yield 'yield2');
//    var_dump($ret);
//}
//$gen = gen();
////var_dump($gen->current());    // string(6) "yield1"
////var_dump($gen->send('ret1')); // string(4) "ret1"   (the first var_dump in gen)
////// string(6) "yield2" (the var_dump of the ->send() return value)
////var_dump($gen->send('ret2')); // string(4) "ret2"   (again from within gen)
////// NULL               (the return value of ->send())
/////
//$gen->send('ret0');


class Task
{
    protected $taskId;
    protected $coroutine;
    protected $sendValue = null;
    protected $beforeFirstYield = true;

    public function __construct($taskId, Generator $coroutine)
    {
        $this->taskId = $taskId;
        $this->coroutine = $coroutine;
    }

    public function getTaskId()
    {
        return $this->taskId;
    }

    public function setSendValue($sendValue)
    {
        $this->sendValue = $sendValue;
    }

    public function run()
    {
        if ($this->beforeFirstYield) {
            $this->beforeFirstYield = false;
            return $this->coroutine->current();
        } else {
            $retval = $this->coroutine->send($this->sendValue);
            $this->sendValue = null;
            return $retval;
        }
    }

    public function isFinished()
    {
        return !$this->coroutine->valid();
    }
}


class Scheduler {
    protected $maxTaskId = 0;
    protected $taskMap = []; // taskId => task
    protected $taskQueue;
    public function __construct() {
        $this->taskQueue = new SplQueue();
    }
    public function newTask(Generator $coroutine) {
        $tid = ++$this->maxTaskId;
        $task = new Task($tid, $coroutine);
        $this->taskMap[$tid] = $task;
        $this->schedule($task);
        return $tid;
    }
    public function schedule(Task $task) {
        $this->taskQueue->enqueue($task);
    }
    public function run() {
        while (!$this->taskQueue->isEmpty()) {
            $task = $this->taskQueue->dequeue();
            $task->run();
            if ($task->isFinished()) {
                unset($this->taskMap[$task->getTaskId()]);
            } else {
                $this->schedule($task);
            }
        }
    }
}

function task1() {
    for ($i = 1; $i <= 10; ++$i) {
        echo "This is task 1 iteration $i.\n";
        yield;
    }
}
function task2() {
    for ($i = 1; $i <= 5; ++$i) {
        echo "This is task 2 iteration $i.\n";
        yield;
    }
}
$scheduler = new Scheduler;
$scheduler->newTask(task2());
$scheduler->newTask(task2());
$scheduler->run();

