<?php
$host = "localhost";
$user = "X33670851";
$password = "X33670851";
$dbname = "X33670851";

$mysqli = new mysqli($host, $user, $password, $dbname);

if ($mysqli->connect_error) {
	die("Connection failed: " . $mysqli->connect_error);
}

$userinput = $_GET['userinput'];

$query = "SELECT * FROM Products, Stock, ProductImages
		  WHERE Products.ProductID = Stock.ProductID
		  AND Products.ProductID = ProductImages.ProductID
		  AND ProductName LIKE '%{$userinput}%'";
$result = $mysqli->query($query);

$products = array();

while ($row = $result->fetch_object()) {
	$products[] = $row;
}

$result->free_result();

$mysqli->close();

echo json_encode($products);
?>
