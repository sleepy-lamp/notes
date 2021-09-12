<?php

$generation = (function() {
    $bar = 'a';
    $a = yield $bar;
    echo $a, PHP_EOL;
    $b = yield 'b';
    echo $b, PHP_EOL;
    $c = yield 'c';
    echo $c, PHP_EOL;
})();

$i = 0;

echo $generation->current(), PHP_EOL;

echo $generation->send($i++), PHP_EOL;
echo $generation->send($i++), PHP_EOL;
$generation->send($i++);

// 执行结果：
// a
// 0
// b
// 1
// c
// 2