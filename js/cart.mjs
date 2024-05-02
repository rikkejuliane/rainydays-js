import { getCart, removeFromCart, saveCart, incrementQuantity, decrementQuantity } from './cartUtils.mjs';
import { showLoader, hideLoader } from './loader.mjs'; // Import the loader module

function displayCartItems() {
    showLoader();
    const cartItemsContainer = document.getElementById('cart-items-container');
    cartItemsContainer.innerHTML = '';

    const checkoutButton = document.getElementById('checkout-button'); // Get the Buy Now button by the correct ID

    const cart = getCart();
    let totalPrice = 0;

    if (cart.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Your cart is empty';
        cartItemsContainer.appendChild(emptyMessage);
        hideLoader();

        if (checkoutButton) {
            checkoutButton.style.display = 'none'; // Hide the Buy Now button if the cart is empty
        }
    } else {
        // Show the Buy Now button when there are items in the cart
        if (checkoutButton) {
            checkoutButton.style.display = 'block'; // Ensure it is visible
        }

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

            const decrementButton = document.createElement('button');
            decrementButton.textContent = '-';
            decrementButton.setAttribute('data-item-id', item.id);  // Add data attribute
            decrementButton.className = 'decrement-button';  // Ensure this class is added for delegation

            const incrementButton = document.createElement('button');
            incrementButton.textContent = '+';
            incrementButton.setAttribute('data-item-id', item.id);  // Add data attribute
            incrementButton.className = 'increment-button';  // Ensure this class is added for delegation

            const quantityDisplay = document.createElement('span');
            quantityDisplay.textContent = item.quantity;

            itemElement.appendChild(decrementButton);
            itemElement.appendChild(quantityDisplay);
            itemElement.appendChild(incrementButton);

            cartItemsContainer.appendChild(itemElement);

            totalPrice += item.price * item.quantity;
        });

        const totalPriceElement = document.createElement('div');
        totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        cartItemsContainer.appendChild(totalPriceElement);
        hideLoader();
    }
}



function setupEventListeners() {
    const cartItemsContainer = document.getElementById('cart-items-container');

    cartItemsContainer.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
            const itemId = target.getAttribute('data-item-id');
            if (target.classList.contains('increment-button')) {
                incrementQuantity(itemId);
                displayCartItems();
            } else if (target.classList.contains('decrement-button')) {
                decrementQuantity(itemId);
                displayCartItems();
            }
        }
    });

    // Attach other relevant listeners here
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function () {
            if (getCart().length === 0) {
                alert('Your cart is empty.');
                return;
            }
            // Assuming the checkout processes or validates the cart contents
            showLoader(); // Show loader when proceeding to checkout
            window.location.href = 'checkout.html';  // Redirect to a checkout page
        });
    }
}

window.onload = function () {
    displayCartItems();
    setupEventListeners();  // Setup event listeners after the page has loaded
}; 