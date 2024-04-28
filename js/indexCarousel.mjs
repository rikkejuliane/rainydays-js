import { API_JACKETS_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { showLoader, hideLoader } from "./loader.mjs";

async function loadCarousel() {
    showLoader(); // Show the loader before fetching the data
    try {
        const jackets = await fetchData(API_JACKETS_URL);
        createCarousel(jackets);
        initCarousel();
    } catch (error) {
        console.error("Failed to load carousel:", error);
        // Optionally handle errors more visibly in the UI
    } finally {
        hideLoader(); // Hide the loader after the carousel is initialized or if an error occurs
    }
}

function createCarousel(jackets) {
    const container = document.getElementById('carouselContainer');
    // Ensuring there's enough content to loop seamlessly
    const extraImages = jackets.slice(0, 3); // Assuming there are at least 3 images in the original list
    const allJackets = jackets.concat(extraImages); // Append the first three images at the end

    container.innerHTML = '<div class="carousel-slide">' +
        allJackets.map(jacket => `<img src="${jacket.image}" class="carousel-image">`).join('') +
        '</div>';
}

function initCarousel() {
    const slide = document.querySelector('.carousel-slide');
    const container = document.getElementById('carouselContainer');
    let counter = 0;

    const resetIndex = Math.floor((slide.children.length - 3) / 3); // Adjust to not count the extra images
    const updateCarousel = () => {
        counter++;
        if (counter > resetIndex) {
            counter = 0; // Resets to the first image instantly
            slide.style.transition = 'none'; // Disable transition for instant reset
            slide.style.transform = `translateX(0px)`;
            requestAnimationFrame(() => {
                // Enable transition after the next repaint
                requestAnimationFrame(() => {
                    slide.style.transition = 'transform 0.5s ease-in-out';
                    counter = 1; // Set to start moving to second set
                    slide.style.transform = `translateX(-${container.clientWidth * counter}px)`;
                });
            });
        } else {
            slide.style.transform = `translateX(-${container.clientWidth * counter}px)`;
        }
    };

    setInterval(updateCarousel, 3000); // Change image every 3 seconds
}

loadCarousel();