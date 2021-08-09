<?php
// declare(strict_types=1);
// error_reporting(E_ALL);


// set_error_handler(

//     function (int $errno, string $errstr, string $errfile, int $errline): void {
//         if (!(error_reporting() & $errno)) {
//             // error_reporting does not include this error
//             return;
//         }

//         var_dump($errno);

//         throw new ErrorException($errstr, 0, $errno, $errfile, $errline);


//         // echo 'error_handle';
//     }
// );
// echo $a; 

// set_exception_handler(function(){echo 'exception handle';});

// try {
// (function(string $a){
//     var_dump($a);
// })(1, 2);
// } catch(Error $e) {
//     var_dump($e);
// }

// echo 123;

// spl_autoload_register(function($name) {
//     var_dump($name);
    // require 'demo1.php';
// });

// try {
//     new A();
//     demo1();
// } catch (Throwable $e) {
//     var_dump($e);
// }

// $a = 1;

// phpinfo();


// $a = new Class {
//     protected $pro;
//     public function dumpPro()
//     {
//         var_dump($this->pro);
//     }
// };

// $modifyPro = function() {
//     $this->pro = 'modified';
//     return 'return';
// };

// $b = $modifyPro->call($a);

// var_dump($a);

// $a->dumpPro();

// echo sprintf('%b',  -9);

// var_dump(~9);
echo 123;


