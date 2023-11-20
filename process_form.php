<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Process the form data (you can customize this part)
    // For example, send an email or store data in a database

    // Redirect back to the contact page after processing
    header("Location: contact.html");
    exit();
}
?>
