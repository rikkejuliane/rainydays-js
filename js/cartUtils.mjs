// Fetch the cart
export function getCart() {
    const cartJSON = localStorage.getItem('cart');
    return cartJSON ? JSON.parse(cartJSON) : [];
}

// Save cart
export function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Adds product to cart
export function addToCart(product) {
    const cart = getCart();
    const existingProductIndex = cart.findIndex(p => p.id === product.id);
    let message;
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity++;
        message = `Added ${product.title} to your cart.`;
    } else {
        product.quantity = 1;
        cart.push(product);
        message = `Added ${product.title} to your cart!`;
    }
    saveCart(cart);
    alert(message);
}

// +
export function incrementQuantity(productId) {
    const cart = getCart();
    const productIndex = cart.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        cart[productIndex].quantity++;
        saveCart(cart);
    }
}

// - 
export function decrementQuantity(productId) {
    const cart = getCart();
    const productIndex = cart.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
            cart[productIndex].quantity--;
        } else {
            cart.splice(productIndex, 1);
        }
        saveCart(cart);
    }
}

// Removes item from cart
export function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
}

// Updates cart count
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Update cart count every 5 sec
window.onload = function () {
    updateCartCount();
    setInterval(updateCartCount, 5000);
};