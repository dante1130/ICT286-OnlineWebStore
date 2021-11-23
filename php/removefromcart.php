<?php

session_start();

if(!isset($_SESSION['products'])){
    $_SESSION['products'] = array();
}

$product = $_POST['product'];

if ($key = array_search($product, $_SESSION['products']) !== false) {
    unset($_SESSION['products'][$key]);
}

?>