import { fetchData } from './fetchData.mjs';
import { API_JACKETS_URL } from './constants.mjs';

async function fetchJacketDetails(jacketId) {
    const jackets = await fetchData(API_JACKETS_URL);
    return jackets.find(jacket => jacket.id === jacketId);
}

function displayJacketDetails(jacket) {
    const container = document.getElementById('jacketDetails');
    container.innerHTML = ''; // Clear previous details

    // Create a div for all the jacket details
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('jacket-info'); // Add a class for styling

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

    // Create and fill the size select dropdown
    const sizeSelect = document.createElement("select");
    sizeSelect.id = 'size-select';
    jacket.sizes.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
    });

    // Create Add to Cart button
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.className = "add-to-cart-button";
    addToCartButton.onclick = function () {
        console.log(`Added ${jacket.title} size ${sizeSelect.value} to cart`);
        // Implement additional functionality as needed
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

async function initializeProductPage() {
    const jacketId = getJacketIdFromUrl();
    if (jacketId) {
        const jacket = await fetchJacketDetails(jacketId);
        if (jacket) {
            displayJacketDetails(jacket);
        } else {
            console.error('Jacket not found');
        }
    }
}

initializeProductPage();