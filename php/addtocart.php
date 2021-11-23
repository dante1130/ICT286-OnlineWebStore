<?php

session_start();

if(!isset($_SESSION['products'])){
    $_SESSION['products'] = array();
}

$product = $_POST['product'];

$_SESSION['products'][] =  $product;

?>