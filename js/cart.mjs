import { getCart, removeFromCart, saveCart, incrementQuantity, decrementQuantity } from './cartUtils.mjs';
import { showLoader, hideLoader } from './loader.mjs';

function displayCartItems() {
    showLoader();
    const cartItemsContainer = document.getElementById('cart-items-container');
    cartItemsContainer.innerHTML = '';

    const checkoutButton = document.getElementById('checkout-button'); 

    const cart = getCart();
    let totalPrice = 0;

    if (cart.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Your cart is empty';
        cartItemsContainer.appendChild(emptyMessage);
        hideLoader();

        if (checkoutButton) {
            checkoutButton.style.display = 'none'; 
        }
    } else {
        if (checkoutButton) {
            checkoutButton.style.display = 'block'; 
        }

        // Display elements
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';

            // Image
            const imageContainer = document.createElement('div');
            imageContainer.className = 'item-image';
            imageContainer.innerHTML = `<img src="${item.image}" alt="${item.title}">`;

            // Jacket details
            const detailsContainer = document.createElement('div');
            detailsContainer.className = 'item-details';
            detailsContainer.innerHTML = `
                <p>Title: ${item.title}</p>
                <p>Size: ${item.size}</p>
                <p>Color: ${item.color}</p>
                <p>Price: $${item.price}</p>
            `;

            // Remove button
            const buttonsContainer = document.createElement('div');
            buttonsContainer.className = 'buttons-container';
            const decrementButton = document.createElement('button');
            decrementButton.textContent = '-';
            decrementButton.setAttribute('data-item-id', item.id);
            decrementButton.className = 'decrement-button';

            // Add in cart button
            const incrementButton = document.createElement('button');
            incrementButton.textContent = '+';
            incrementButton.setAttribute('data-item-id', item.id);
            incrementButton.className = 'increment-button';
            
            // Quantity
            const quantityDisplay = document.createElement('span');
            quantityDisplay.textContent = item.quantity;

            buttonsContainer.appendChild(decrementButton);
            buttonsContainer.appendChild(quantityDisplay);
            buttonsContainer.appendChild(incrementButton);

            detailsContainer.appendChild(buttonsContainer);  
            itemElement.appendChild(imageContainer);
            itemElement.appendChild(detailsContainer);

            cartItemsContainer.appendChild(itemElement);

            totalPrice += item.price * item.quantity;
        });

        const totalPriceElement = document.createElement('div');
        totalPriceElement.className = 'total-price';
        totalPriceElement.innerHTML = `<hr><div style="text-align:right;">Total Price: $${totalPrice.toFixed(2)}</div>`;
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

    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function () {
            if (getCart().length === 0) {
                alert('Your cart is empty.');
                return;
            }
            showLoader(); 
            window.location.href = 'checkout.html';  
        });
    }
}

window.onload = function () {
    displayCartItems();
    setupEventListeners();  
}; 