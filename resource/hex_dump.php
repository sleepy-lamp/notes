<?php
function hex_dump($data, $newline = "\n")
{
    static $from = '';
    static $to = '';
    static $width = 16;
    static $pad = '.';
    if ($from === '') {
        for ($i = 0; $i <= 0xFF; $i++) {
            $from .= chr($i);
            $to .= ($i >= 0x20 && $i <= 0x7E) ? chr($i) : $pad;
        }
    }
    $hex = str_split(bin2hex($data), $width * 2);
    $chars = str_split(strtr($data, $from, $to), $width);
    $offset = 0;
    foreach ($hex as $i => $line) {
        echo sprintf('%6X', $offset) . ' : ' . implode(' ', str_split($line, 2)) . ' [' . $chars[$i] . ']' . $newline;
        $offset += $width;
    }
}

hex_dump("hello" . chr(0x18) ." world!!!hello world!!!hello world!!!hello world!!!hello world!!!hello world!!!" . chr(0x19));
