<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (count($_POST)) {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

    $recipient = "domvat@domvat.pl";
    $subject = "Nowe zapytanie ze strony";
    $headers = 'From:' . $email;

    if (mail($recipient, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }

} else {
    // Not a POST request, display a 403 forbidden error
    header("HTTP/1.1 403 Forbidden");
    echo "You are not allowed to access this page.";
}
?>