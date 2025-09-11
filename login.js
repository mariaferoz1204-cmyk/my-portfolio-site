// Get the elements
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const loginLink = document.getElementById('loginLink');
const signupLink = document.getElementById('signupLink');

// Switch to the signup form
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none'; 
    signupForm.style.display = 'block';
});

// Switch to the login form
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none'; 
    loginForm.style.display = 'block';
});

// Google login redirects
document.querySelectorAll('.google-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.open('https://accounts.google.com/signin', '_blank');
  });
});

// Redirect after login form submit
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    window.location.href = "index.html"; 
});

// Redirect after signup form submit
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    window.location.href = "index.html"; 
});
