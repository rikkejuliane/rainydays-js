export function createSingleJacketinHTML(jacket) {
    const jacketListItem = document.createElement("li");
    jacketListItem.classList.add('jacketProduct');


    //Create an anchor 
    const productLink = document.createElement("a");
    productLink.href = `../product/index.html?id=${jacket.id}`;


    //Create image
    const jacketImage = document.createElement("img");
    jacketImage.src = `${jacket.image}`;
    jacketImage.alt = `${jacket.title}`;
    productLink.appendChild(jacketImage);

    //Title h2
    const jacketTitle = document.createElement("h2");
    jacketTitle.textContent = `${jacket.title}`;

    //Price 
    const jacketPrice = document.createElement("p");
    jacketPrice.textContent = `${jacket.price}`;

    //Color
    const jacketColor = document.createElement("p");
    jacketColor.textContent = `${jacket.baseColor}`;

    //Size
    const jacketSizeSelect = document.createElement("select");
    jacketSizeSelect.id = `size-select-${jacket.id}`;

    // Iterate over the sizes array directly
    jacket.sizes.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        jacketSizeSelect.appendChild(option);
    });

    // Add to cart button
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.className = "add-to-cart-button";
    addToCartButton.onclick = function () {
        console.log(`Added ${jacket.title} size ${jacketSizeSelect.value} to cart`);
        // Implement additional functionality as needed
    };

    // Append elements
    jacketListItem.appendChild(productLink);
    jacketListItem.appendChild(jacketTitle);
    jacketListItem.appendChild(jacketPrice);
    jacketListItem.appendChild(jacketColor);
    jacketListItem.appendChild(jacketSizeSelect);
    jacketListItem.appendChild(addToCartButton);

    return jacketListItem;
}



