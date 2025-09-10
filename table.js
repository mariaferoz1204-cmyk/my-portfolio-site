document.addEventListener("DOMContentLoaded", function() {
    const bookTableButton = document.getElementById('bookTableBtn');
    const bookingForm = document.getElementById('booking-form');
    const closeBtn = document.getElementById('closeBtn'); // Get the close button

    // Show the booking form when the "Book a Table" button is clicked
    if (bookTableButton && bookingForm) {
        bookTableButton.addEventListener('click', function() {
            // Ensure any transition is disabled before showing the form
            bookingForm.style.transition = 'none';  // Disable transition temporarily
            bookingForm.classList.add('show');      // Show the form
            setTimeout(() => {
                // Re-enable the transition after a small delay
                bookingForm.style.transition = '';   // Re-enable transition
            }, 50); // Adjust the timeout (50ms should be quick enough)
        });
    }

    // Close the booking form when the close button (X) is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            // Remove the "show" class immediately to hide the form
            bookingForm.classList.remove('show');
        });
    }
});
