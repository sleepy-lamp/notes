<?php

error_reporting(E_ALL & ~E_NOTICE);


set_error_handler(

    function (int $errno, string $errstr, string $errfile, int $errline): void {
        if (! (error_reporting() & $errno)) {
            // error_reporting does not include this error
            return;
        }

        throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
    }
);
echo $a;