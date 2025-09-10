document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        // Prepare the order details
        const orderDetails = {
            items: cart,
            totalAmount: document.getElementById('cart-total').textContent
        };

        // Send the order details to the backend
        fetch('/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Your order has been placed. You will receive a call shortly to confirm your order.');
            } else {
                alert('Something went wrong. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to place the order. Please try again.');
        });
    } else {
        alert('Your cart is empty!');
    }
});
