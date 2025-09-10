// Get the elements
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const loginLink = document.getElementById('loginLink');
const signupLink = document.getElementById('signupLink');

// Switch to the signup form
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none'; // Hide login form
    signupForm.style.display = 'block'; // Show signup form
});

// Switch to the login form
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none'; // Hide signup form
    loginForm.style.display = 'block'; // Show login form
});

// Social login redirects (Demo URLs)
function loginWithGoogle() {
    window.open("https://accounts.google.com/signin", "_blank");
}
function loginWithMicrosoft() {
    window.open("https://login.microsoftonline.com/", "_blank");
}
function loginWithApple() {
    window.open("https://appleid.apple.com/sign-in", "_blank");
}
