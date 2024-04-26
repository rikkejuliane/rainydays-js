export function createSingleJacketinHTML(jacket) {
    const jacketListItem = document.createElement("li");
    jacketListItem.classList.add('jacketProduct');

    //Create image
    const jacketImage = document.createElement("img");
    jacketImage.src = `${jacket.image}`;

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
    const jacketSize = document.createElement("p");
    jacketSize.textContent = `${jacket.sizes}`;

    // Append image and title
    jacketListItem.appendChild(jacketImage);
    jacketListItem.appendChild(jacketTitle);
    jacketListItem.appendChild(jacketPrice);
    jacketListItem.appendChild(jacketColor);
    jacketListItem.appendChild(jacketSize);

    // Return the HTML I created
    return jacketListItem;

}