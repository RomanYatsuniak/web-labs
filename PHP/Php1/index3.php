<?php
header('Content-type: text/plain');
$plik = fopen('my2.txt', 'r');
while (!feof($plik)) {
    $s = fgets($plik);
    echo $s;

}
fclose($plik);
?>