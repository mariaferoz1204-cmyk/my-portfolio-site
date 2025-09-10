document.addEventListener("DOMContentLoaded", () => {
    // Handle the menu buttons to show the respective popups
    document.getElementById("breakfast-btn").addEventListener("click", () => {
        document.getElementById("breakfast-popup").style.display = "flex";
    });

    document.getElementById("lunch-btn").addEventListener("click", () => {
        document.getElementById("lunch-popup").style.display = "flex";
    });

    document.getElementById("dinner-btn").addEventListener("click", () => {
        document.getElementById("dinner-popup").style.display = "flex";
    });

    document.getElementById("sweet-treats-btn").addEventListener("click", () => {
        document.getElementById("sweets-popup").style.display = "flex";
    });

    // Close popup when 'X' button is clicked
    const closePopup = (popupId) => {
        document.getElementById(popupId).style.display = "none";
    };

    // Attach close event listeners
    document.getElementById("close-breakfast-popup").addEventListener("click", () => {
        closePopup("breakfast-popup");
    });

    document.getElementById("close-lunch-popup").addEventListener("click", () => {
        closePopup("lunch-popup");
    });

    document.getElementById("close-dinner-popup").addEventListener("click", () => {
        closePopup("dinner-popup");
    });

    document.getElementById("close-sweets-popup").addEventListener("click", () => {
        closePopup("sweets-popup");
    });

    // Add to cart functionality
    const cartItems = [];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const name = e.target.getAttribute("data-item");
            const price = parseInt(e.target.getAttribute("data-price"));

            // Add to cart
            cartItems.push({ name, price });

            // Update cart items display
            const itemElement = document.createElement("div");
            itemElement.textContent = `${name} - Rs. ${price}`;
            cartItemsContainer.appendChild(itemElement);

            // Update total price
            const total = cartItems.reduce((sum, item) => sum + item.price, 0);
            cartTotal.textContent = `Total: Rs. ${total}`;
        });
    });

    // Handle order button (optional)
    document.getElementById("order-btn").addEventListener("click", () => {
        alert("Order placed successfully!");
    });
});
