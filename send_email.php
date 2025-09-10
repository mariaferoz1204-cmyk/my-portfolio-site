<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // PHPMailer autoload

session_start(); // Make sure session is started to get logged-in user

$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'mariaferoz1204@gmail.com';   // Your Gmail SMTP account
    $mail->Password   = 'wtvf rlmu mklt cpgr';        // Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // ✅ Logged-in user details from session
    $customerEmail = $_SESSION['user']['email'] ?? 'no-reply@foodify.com';
    $customerName  = $_SESSION['user']['name']  ?? 'Customer';

    // ✅ Form details from checkout page
    $customerPhone   = $_POST['phone'] ?? '';
   
    $orderDetails    = $_POST['orderDetails'] ?? '';
    $totalAmount     = $_POST['totalAmount'] ?? '';

    // ✅ Email headers
    $mail->setFrom('mariaferoz1204@gmail.com', 'Foodify Orders'); // Always your Gmail for SMTP
    $mail->addAddress('mariaferoz1204@gmail.com', 'Foodify');     // Restaurant email
    $mail->addReplyTo($customerEmail, $customerName);             // Reply goes to customer

    // ✅ Email body
    $emailBody  = "<h2>New Order from Customer</h2>";
    $emailBody .= "<p><strong>Customer Name:</strong> {$customerName}</p>";
    $emailBody .= "<p><strong>Email:</strong> {$customerEmail}</p>";
    $emailBody .= "<p><strong>Phone Number:</strong> {$customerPhone}</p>";
    $emailBody .= "<p><strong>Delivery Address:</strong> {$customerAddress}</p>";
    $emailBody .= "<h3>Order Details:</h3>";
    $emailBody .= "<p>{$orderDetails}</p>";
    $emailBody .= "<p><strong>Total Amount:</strong> Rs. {$totalAmount}</p>";
    $emailBody .= "<p><strong>Time of Order:</strong> " . date('Y-m-d H:i:s') . "</p>";

    // ✅ Send email
    $mail->isHTML(true);
    $mail->Subject = 'New Order from Customer';
    $mail->Body    = $emailBody;

    if ($mail->send()) {
        echo '✅ Order placed successfully! Email sent.';
    } else {
        echo '❌ Failed to send email.';
    }
} catch (Exception $e) {
    echo "Mailer Error: {$mail->ErrorInfo}";
}
?>
