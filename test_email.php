<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Load Composer's autoloader

$mail = new PHPMailer(true); // Create a new PHPMailer instance
try {
    // Server settings
    $mail->isSMTP();  // Use SMTP for email sending
    $mail->Host = 'smtp.gmail.com';  // Gmail's SMTP server
    $mail->SMTPAuth = true;  // Enable SMTP authentication
    $mail->Username = 'your-email@gmail.com';  // Your Gmail address
    $mail->Password = 'wtvf rlmu mklt cpgr';  // App Password you generated
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  // Use SSL/TLS encryption
 $mail->Port = 465;  // Port for SSL  // Gmail's SMTP port for SSL/TLS

    // Recipients
    $mail->setFrom('your-email@gmail.com', 'Sender Name');  // Sender email (this can be any email address)
    $mail->addAddress('mariaferoz1204@gmail.com', 'Maria');  // Recipient email

    // Content
    $mail->isHTML(true);  // Set email format to HTML
    $mail->Subject = 'Test Email from PHPMailer';
    $mail->Body    = 'This is a test email sent via PHPMailer with SSL/TLS encryption.';

    // Send the email
    $mail->send();
    echo 'Message has been sent to mariaferoz1204@gmail.com';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";  // Output any errors
}
?>
