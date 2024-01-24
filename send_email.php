<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email content
    $subject = "New Contact Form Submission";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Replace 'your_email@example.com' with your actual email address
    $to = "redwane.aitoukazzamane@gmail.com";

    // Additional headers
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $body, $headers);

    // Redirect back to the contact page or show a thank you message
    header("Location: index.html?success=true");
    exit;
}
?>
