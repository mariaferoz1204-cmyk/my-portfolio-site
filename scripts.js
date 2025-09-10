// Function to load the header from 'header.html'
function loadHeader() {
    fetch('header.html') // Fetch content of header.html
        .then(response => response.text()) // Convert the response to text
        .then(data => document.getElementById('header').innerHTML = data) // Insert the content into the header placeholder
        .catch(error => console.error('Error loading header:', error)); // Handle errors
}

// Function to load the footer from 'footer.html'
function loadFooter() {
    fetch('footer.html') // Fetch content of footer.html
        .then(response => response.text()) // Convert the response to text
        .then(data => document.getElementById('footer').innerHTML = data) // Insert the content into the footer placeholder
        .catch(error => console.error('Error loading footer:', error)); // Handle errors
}

// Call the functions to load header and footer when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});
