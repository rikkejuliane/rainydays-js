import { getCart, removeFromCart, saveCart } from './cartUtils.mjs';

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    cartItemsContainer.innerHTML = '';  // Clear existing items

    const cart = getCart();

    // Check if the cart is empty and display a message if it is
    if (cart.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Your cart is empty';
        emptyMessage.style.textAlign = 'center'; // Center the message if desired
        emptyMessage.style.marginTop = '20px'; // Add some margin for better spacing
        cartItemsContainer.appendChild(emptyMessage);
    } else {
        // If the cart is not empty, proceed to display the items
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}" style="width:100px; height:100px;">
                <p>Title: ${item.title}</p>
                <p>Size: ${item.size}</p>
                <p>Color: ${item.color}</p>
                <p>Price: $${item.price}</p>
            `;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                removeFromCart(index);
                displayCartItems();  // Redisplay the cart items after removal
            });

            itemElement.appendChild(removeButton);
            cartItemsContainer.appendChild(itemElement);
        });
    }
}


function setupEventListeners() {
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function () {
            if (getCart().length === 0) {
                alert('Your cart is empty.');
                return;
            }
            // Assuming the checkout processes or validates the cart contents
            window.location.href = 'checkout.html';  // Redirect to a checkout page
        });
    }
}

window.onload = function () {
    displayCartItems();
    setupEventListeners();  // Setup event listeners after the page has loaded
};