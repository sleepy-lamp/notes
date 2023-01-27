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
//$a = 1;
//
//$b = 2;
//
//$c = 3;
//
//echo $a + $b;

//require __DIR__ . '/vendor/autoload.php';
//
//$request =  Laminas\Diactoros\ServerRequestFactory::fromGlobals(
//    $_SERVER,
//    $_GET,
//    $_POST,
//    $_COOKIE,
//    $_FILES
//);



// require __DIR__ . '/vendor/autoload.php';


// $proxy = new Clue\React\HttpProxy\ProxyConnector('http://127.0.0.1:8100');


// $connector = new React\Socket\Connector(array(
//     'tcp' => $proxy,
//     'dns' => false
// ));

// $browser = new React\Http\Browser($connector);

// //$browser->get('https://google.com/')->then(function (Psr\Http\Message\ResponseInterface $response) {
// //    var_dump($response->getHeaders(), (string) $response->getBody());
// //}, function (Exception $e) {
// //    echo 'Error: ' . $e->getMessage() . PHP_EOL;
// //});

// $browser->post(
//     'http://baidu.com/',
//     ['Content-Type' => 'application/json'],
//     json_encode([1,2,3])
// )->then(function (Psr\Http\Message\ResponseInterface $response) {
//     var_dump($response->getHeaders(), (string) $response->getBody());
// });


// $http = new React\Http\HttpServer(function (Psr\Http\Message\ServerRequestInterface $request) {
//     var_dump($request->getHeaders());
//     return React\Http\Message\Response::plaintext(
//         "Hello World!\n"
//     );
// });

// $socket = new React\Socket\SocketServer('0.0.0.0:8080');
// $http->listen($socket);

use function PHPSTORM_META\type;

try {
    require 'demo1.php';
} catch(Throwable $e) {
    var_dump(get_class($e));
}




