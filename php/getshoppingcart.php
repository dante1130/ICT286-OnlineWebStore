<?php

session_start();

if(!isset($_SESSION['products'])){
    $_SESSION['products'] = array();
}

echo json_encode($_SESSION['products']);

?>