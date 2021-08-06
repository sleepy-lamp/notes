<?php
$url = "www.ite5e.com";
if (array_key_exists($url, $_GET)) {
    $url = $_GET[$url];
}
$hosts = array("www.xunlei.com", "www.qq.com", "www.163.com", "www.baidu.com", "www.kaixin.com", "vip.xunlei.com");
#$hosts = array($url);
$timeout = 5;
$status = array();
$retdata = array();
$sockets = array();
$e = array();
/* Initiate connections to all the hosts simultaneously */
foreach ($hosts as $id => $host) {
    $errno = 0;
    $errstr = "";
    $s = stream_socket_client("$host:80", $errno, $errstr, $timeout, STREAM_CLIENT_ASYNC_CONNECT | STREAM_CLIENT_CONNECT);
    if ($s) {
        $sockets[$id] = $s;
        $status[$id] = "in progress";
    } else {
        $status[$id] = "failed, $errno $errstr";
    }
    $retdata[$id] = '';
}
/* Now, wait for the results to come back in */
while (count($sockets)) {
    $read = $write = $sockets;
    /* This is the magic function - explained below */
    $n = stream_select($read, $write, $e, $timeout);
    if ($n > 0) {
        /* readable sockets either have data for us, or are failed connection attempts */
        foreach ($read as $r) {
            $id = array_search($r, $sockets);
            $data = fread($r, 8192);
            if (strlen($data) == 0) {
                if ($status[$id] == "in progress") {
                    $status[$id] = "failed to connect";
                }
                fclose($r);
                unset($sockets[$id]);
            } else {
                $retdata[$id] .= $data;
            }
        }
        /* writeable sockets can accept an HTTP request */
        foreach ($write as $w) {
            if (!is_resource($w)) continue;
            $id = array_search($w, $sockets);
            fwrite($w, "GET / HTTP/1.0 Host: " . $hosts[$id] . " ");
            $status[$id] = "waiting for response";
        }
    } else {
        /* timed out waiting; assume that all hosts associated
     * with $sockets are faulty */
        foreach ($sockets as $id => $s) {
            $status[$id] = "timed out " . $status[$id];
        }
        break;
    }
}
foreach ($hosts as $id => $host) {
    #echo "Host: $host ";
    #echo "Status: " . $status[$id] . " ";
    #echo "Retdata: " . $retdata[$id] . " ";
    $strs = explode(" ", $retdata[$id], 2);
    echo isset($strs[1]) ? $strs[1] : $retdata[$id];
}
function debug($i)
{
    var_dump($i);
    var_dump(gettype($i));
    var_dump(is_resource($i));
}
