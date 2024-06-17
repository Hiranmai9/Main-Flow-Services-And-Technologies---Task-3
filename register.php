<?php
$servername = "localhost";  // Change this to your database server
$username = "root";         // Change this to your database username
$password = "Aucc@1234";             // Change this to your database password
$dbname = "event_management";  // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO registrations (fullName, email, address, phoneNumber, eventSelection, comments) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $fullName, $email, $address, $phoneNumber, $eventSelection, $comments);

// Set parameters and execute
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$address = $_POST['address'];
$phoneNumber = $_POST['phoneNumber'];
$eventSelection = $_POST['eventSelection'];
$comments = $_POST['comments'];

if ($stmt->execute()) {
    echo "Your record has been noted!!Stay tuned for more details.";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
