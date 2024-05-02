/**
 * Fetches the cart from local storage and logs the process.
 * @returns {Array} The current cart or an empty array if no cart is found.
 */
export function getCart() {
    const cartJSON = localStorage.getItem('cart');
    console.log("Fetching cart from local storage:", cartJSON); // Log the raw JSON from local storage
    return cartJSON ? JSON.parse(cartJSON) : [];
  }
  
  /**
   * Saves the cart to local storage and logs the data being saved.
   * @param {Array} cart The cart array to save.
   */
  export function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
  
  /**
   * Adds a product to the cart, logging the state before and after adding.
   * @param {Object} product The product to add to the cart.
   */
  export function addToCart(product) {
    const cart = getCart();
    const existingProductIndex = cart.findIndex(p => p.id === product.id); // Assuming each product has a unique 'id'
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity++; // Increment quantity
    } else {
        product.quantity = 1; // Set initial quantity
        cart.push(product);
    }
    saveCart(cart);
}

// Add a new function to decrement the product quantity
export function incrementQuantity(productId) {
    const cart = getCart();
    const productIndex = cart.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        cart[productIndex].quantity++;
        saveCart(cart);
    }
}

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
  
  /**
   * Removes a product from the cart by index and logs the action.
   * @param {number} index The index of the product to remove from the cart.
   */
  export function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);  // Remove the item at the specified index
    saveCart(cart);  // Save the updated cart back to local storage
}


  function updateCartCount() {
    const cart = getCart();
    const cartCount = cart.length; // Get the number of items in the cart
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount; // Update the display
    }
    
}

// Update cart count when the window finishes loading
window.onload = function () {
    updateCartCount(); // Ensure the cart count is updated every time the page loads
};