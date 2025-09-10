<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    $file = "users.json";
    $users = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

    foreach ($users as $user) {
        if ($user['email'] === $email) {
            echo "❌ Email already registered. Please login.";
            exit();
        }
    }

    $users[] = [
        'name' => $name,
        'email' => $email,
        'password' => password_hash($password, PASSWORD_DEFAULT)
    ];

    file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT));

    $_SESSION['user'] = ['name' => $name, 'email' => $email];

    header("Location: index.html"); // now it will exist
    exit();
}
?>
