<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="pl" lang="pl">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Lab PHP</title>
</head>
<body>

<?php
    function witaj($imie) {
        if($imie=='Roman'){
            return 'Cześć ' . $imie . '!';
        } else if(is_numeric($imie)) {
            echo "Brak";
            for($i=1;$i<=$imie;$i++){
                echo $i;
            }

        }

    }
    //print_r($_GET);
    //print_r($_POST);
    $a = $_GET[uname];
    echo witaj($a);
?>
</body>
</html>