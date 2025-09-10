document.addEventListener('DOMContentLoaded', function () {
    const breakfastBtn = document.getElementById('breakfast-btn');
    const lunchBtn = document.getElementById('lunch-btn');
    const dinnerBtn = document.getElementById('dinner-btn'); // New dinner button
    const breakfastPopup = document.getElementById('breakfast-popup');
    const lunchPopup = document.getElementById('lunch-popup');
    const dinnerPopup = document.getElementById('dinner-popup'); // New dinner popup
    const closeBreakfastPopup = document.getElementById('close-popup');
    const closeLunchPopup = document.getElementById('close-lunch-popup');
    const closeDinnerPopup = document.getElementById('close-dinner-popup'); // New close button for dinner

    // Show the breakfast popup when the "Breakfast" button is clicked
    breakfastBtn.addEventListener('click', function() {
        breakfastPopup.style.display = 'flex';
        lunchPopup.style.display = 'none';
        dinnerPopup.style.display = 'none';
    });

    // Show the lunch popup when the "Lunch" button is clicked
    lunchBtn.addEventListener('click', function() {
        lunchPopup.style.display = 'flex';
        breakfastPopup.style.display = 'none';
        dinnerPopup.style.display = 'none';
    });

    // Show the dinner popup when the "Dinner" button is clicked
    dinnerBtn.addEventListener('click', function() {
        dinnerPopup.style.display = 'flex';
        breakfastPopup.style.display = 'none';
        lunchPopup.style.display = 'none';
    });

    // Close the breakfast popup when the close button is clicked
    closeBreakfastPopup.addEventListener('click', function() {
        breakfastPopup.style.display = 'none';
    });

    // Close the lunch popup when the close button is clicked
    closeLunchPopup.addEventListener('click', function() {
        lunchPopup.style.display = 'none';
    });

    // Close the dinner popup when the close button is clicked
    closeDinnerPopup.addEventListener('click', function() {
        dinnerPopup.style.display = 'none';
    });

    // Optionally, close the popup if the user clicks anywhere outside the popup content
    window.addEventListener('click', function(event) {
        if (event.target === breakfastPopup) {
            breakfastPopup.style.display = 'none';
        } else if (event.target === lunchPopup) {
            lunchPopup.style.display = 'none';
        } else if (event.target === dinnerPopup) {
            dinnerPopup.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sweetTreatsBtn = document.getElementById('sweet-treats-btn');
    const sweetTreatsPopup = document.getElementById('sweet-treats-popup');
    const closeSweetTreatsPopup = document.getElementById('close-sweet-treats-popup');

    // Show the Sweet Treats popup when the button is clicked
    sweetTreatsBtn.addEventListener('click', function() {
        sweetTreatsPopup.style.display = 'flex'; // Show the popup
    });

    // Close the popup when the close button (×) is clicked
    closeSweetTreatsPopup.addEventListener('click', function() {
        sweetTreatsPopup.style.display = 'none'; // Hide the popup
    });

    // Optionally, close the popup if the user clicks anywhere outside the popup content
    window.addEventListener('click', function(event) {
        if (event.target === sweetTreatsPopup) {
            sweetTreatsPopup.style.display = 'none'; // Hide the popup if the user clicks outside of it
        }
    });
});
// Sample data for menu cards
const breakfastItems = [
    { title: 'Pancakes', description: 'Delicious fluffy pancakes', price: '$5', img: 'breakfast1.jpg' },
    { title: 'Omelette', description: 'Made with fresh eggs', price: '$7', img: 'breakfast2.jpg' },
    { title: 'Toast', description: 'Golden brown toast', price: '$3', img: 'breakfast3.jpg' },
    { title: 'Fruit Salad', description: 'Fresh seasonal fruits', price: '$4', img: 'breakfast4.jpg' },
    { title: 'Waffles', description: 'Crispy waffles with syrup', price: '$6', img: 'breakfast5.jpg' },
    { title: 'Bagel', description: 'Toasted bagel with cream cheese', price: '$2', img: 'breakfast6.jpg' },
    { title: 'Cereal', description: 'Crispy cereal with milk', price: '$3', img: 'breakfast7.jpg' },
    { title: 'Croissant', description: 'Freshly baked croissant', price: '$4', img: 'breakfast8.jpg' }
];

const lunchItems = [
    { title: 'Sandwich', description: 'Tasty sandwich with fresh veggies', price: '$8', img: 'lunch1.jpg' },
    { title: 'Salad', description: 'Healthy mixed salad', price: '$7', img: 'lunch2.jpg' },
    { title: 'Pizza', description: 'Cheese pizza with toppings', price: '$10', img: 'lunch3.jpg' },
    { title: 'Pasta', description: 'Pasta with marinara sauce', price: '$9', img: 'lunch4.jpg' },
    { title: 'Burger', description: 'Juicy beef burger', price: '$8', img: 'lunch5.jpg' },
    { title: 'Sushi', description: 'Fresh sushi rolls', price: '$12', img: 'lunch6.jpg' },
    { title: 'Wrap', description: 'Veggie wrap with hummus', price: '$6', img: 'lunch7.jpg' },
    { title: 'Soup', description: 'Hot and comforting soup', price: '$5', img: 'lunch8.jpg' }
];

// Function to create the cards dynamically
function createMenuCards(items) {
    const container = document.getElementById('menu-cards-container');
    container.innerHTML = ''; // Clear existing cards

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        card.innerHTML = `
            <img class="menu-card-img" src="${item.img}" alt="${item.title}">
            <h3 class="card-title">${item.title}</h3>
            <p class="description">${item.description}</p>
            <p class="price">${item.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;

        container.appendChild(card);
    });
}

// Event listeners for each menu option
document.getElementById('breakfast-btn').addEventListener('click', () => createMenuCards(breakfastItems));
document.getElementById('lunch-btn').addEventListener('click', () => createMenuCards(lunchItems));
document.getElementById('dinner-btn').addEventListener('click', () => createMenuCards(breakfastItems)); // You can replace this with dinner items if available







// Show respective menu when clicked
document.getElementById('breakfast-btn').addEventListener('click', function() {
    document.getElementById('breakfast-menu').style.display = 'block';
    document.getElementById('lunch-menu').style.display = 'none';
    document.getElementById('dinner-menu').style.display = 'none';
    document.getElementById('sweet-treats-menu').style.display = 'none';
});

document.getElementById('lunch-btn').addEventListener('click', function() {
    document.getElementById('lunch-menu').style.display = 'block';
    document.getElementById('breakfast-menu').style.display = 'none';
    document.getElementById('dinner-menu').style.display = 'none';
    document.getElementById('sweet-treats-menu').style.display = 'none';
});

document.getElementById('dinner-btn').addEventListener('click', function() {
    document.getElementById('dinner-menu').style.display = 'block';
    document.getElementById('breakfast-menu').style.display = 'none';
    document.getElementById('lunch-menu').style.display = 'none';
    document.getElementById('sweet-treats-menu').style.display = 'none';
});

document.getElementById('sweet-treats-btn').addEventListener('click', function() {
    document.getElementById('sweet-treats-menu').style.display = 'block';
    document.getElementById('breakfast-menu').style.display = 'none';
    document.getElementById('lunch-menu').style.display = 'none';
    document.getElementById('dinner-menu').style.display = 'none';
});

// Add item to cart
let cart = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const itemPrice = parseInt(this.getAttribute('data-price'));
        
        cart.push({ itemName, itemPrice });
        updateCart();
    });
});

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.itemName} - Rs. ${item.itemPrice}`;
        cartItems.appendChild(cartItem);
        total += item.itemPrice;
    });
    
    document.getElementById('cart-total').textContent = `Total: Rs. ${total}`;
}
