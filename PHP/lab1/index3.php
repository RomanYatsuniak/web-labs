<?php
$s2 = $_GET[uname];
$plik = fopen('my2.txt', 'r');
while (!feof($plik)) {
    $s = trim(fgets($plik));
    if(strlen($s2)==strlen($s)){
        $spr=0;
        for($i=0;$i<strlen($s);$i++){
            if($s[$i]==$s2[$i] ||  $s2[$i]=="_"){
                $spr++;
            }

        }
        if($spr=strlen($s)){
            echo $s."<br/>";
        }
    }


}
fclose($plik);
?>