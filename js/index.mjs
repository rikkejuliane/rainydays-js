import { API_POSTS_URL } from "./constants.mjs";


async function fetchData() {
    try {
        const response = await fetch(API_POSTS_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

async function createJacketinHTML() {
    const jackets = await fetchData();
    const jacketSection = document.getElementById("jacketsSection");

    for (var i = 0; i < jackets.length; i++) {
        const jacketListItem = document.createElement("li");
        jacketListItem.classList.add('jacketProduct');

        //Create image
        const jacketImage = document.createElement("img");
        jacketImage.src = `${jackets[i].image}`;

        //Title h2
        const jacketTitle = document.createElement("h2");
        jacketTitle.textContent = `${jackets[i].title}`;

        //Price 
        const jacketPrice = document.createElement("p");
        jacketPrice.textContent = `${jackets[i].price}`;

        //Color
        const jacketColor = document.createElement("p");
        jacketColor.textContent = `${jackets[i].baseColor}`;

        //Size
        const jacketSize = document.createElement("p");
        jacketSize.textContent = `${jackets[i].sizes}`;

        // Append image and title
        jacketListItem.appendChild(jacketImage);
        jacketListItem.appendChild(jacketTitle);
        jacketListItem.appendChild(jacketPrice);
        jacketListItem.appendChild(jacketColor);
        jacketListItem.appendChild(jacketSize);

        // Append list items to jacketSection
        jacketSection.appendChild(jacketListItem);
    }
}

createJacketinHTML();
