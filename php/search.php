<?php
$host = "localhost";
$user = "X33670851";
$password = "X33670851";
$dbname = "X33670851";

$mysqli = new mysqli($host, $user, $password, $dbname);

if ($mysqli->connect_error) {
	echo "Connection failed.";
	die("Connection failed: " . $mysqli->connect_error);
}

$userinput = $_GET['userinput'];

$query = "SELECT * FROM Products WHERE ProductName LIKE '{$userinput}'";
$result = $mysqli->query($query);

$products = array();

while ($row = $result->fetch_object()) {
	$products[] = $row;
}

$result->free_result();

$mysqli->close();

echo json_encode($result);
?>
