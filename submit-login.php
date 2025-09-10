<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    $file = "users.json";
    if (!file_exists($file)) {
        echo "❌ No users found. Please sign up first.";
        exit();
    }

    $users = json_decode(file_get_contents($file), true);
    foreach ($users as $user) {
        if ($user['email'] === $email && password_verify($password, $user['password'])) {
            $_SESSION['user'] = ['name' => $user['name'], 'email' => $email];
            header("Location: index.html"); // where you want to go after login
            exit();
        }
    }

    echo "❌ Invalid email or password.";
}
?>
