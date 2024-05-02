import { fetchData } from './fetchData.mjs';
import { API_JACKETS_URL } from './constants.mjs';
import { addToCart } from './cartUtils.mjs';
import { showLoader, hideLoader } from './loader.mjs';

async function fetchJacketDetails(jacketId) {
    const jackets = await fetchData(API_JACKETS_URL);
    return jackets.find(jacket => jacket.id === jacketId);
}

function displayJacketDetails(jacket) {
    const container = document.getElementById('jacketDetails');
    container.innerHTML = '';

    // Create a div for all the jacket details
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('jacket-info');

    // Img
    const image = document.createElement('img');
    image.src = jacket.image;
    image.alt = jacket.title;

    // H2
    const title = document.createElement('h2');
    title.textContent = jacket.title;

    // Description
    const description = document.createElement('p');
    description.textContent = jacket.description;

     //Color
     const color = document.createElement('p');
     color.textContent = `Color: ${jacket.baseColor}`;

    // Price
    const price = document.createElement('p');
    price.textContent = `Price: ${jacket.price}`;

    // Size select dropdown
    const sizeSelect = document.createElement("select");
    sizeSelect.id = 'size-select';
    jacket.sizes.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
    });

    // Add to Cart button
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.className = "add-to-cart-button";
    addToCartButton.onclick = function () {
        const selectedSize = document.getElementById('size-select').value;
        const productToAdd = {
            id: jacket.id,
            title: jacket.title,
            size: selectedSize,
            price: jacket.price,
            color: jacket.baseColor,
            image: jacket.image
        };
        addToCart(productToAdd);
        console.log(`Added ${jacket.title} size ${selectedSize} to cart`);
        
    };


    // Append elements to detailsDiv
    detailsDiv.appendChild(image);
    detailsDiv.appendChild(title);
    detailsDiv.appendChild(description);
    detailsDiv.appendChild(color);
    detailsDiv.appendChild(price);
    detailsDiv.appendChild(sizeSelect);
    detailsDiv.appendChild(addToCartButton);

    // Append detailsDiv to the main container
    container.appendChild(detailsDiv);
}

function getJacketIdFromUrl() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get('id');
}

async function ProductPage() {
    const jacketId = getJacketIdFromUrl();
    if (jacketId) {
        showLoader(); // Show loader while fetching data
        const jacket = await fetchJacketDetails(jacketId);
        if (jacket) {
            displayJacketDetails(jacket);
        } else {
            console.error('Jacket not found');
        }
        hideLoader(); // Hide loader after fetching data
    }
}


ProductPage();
