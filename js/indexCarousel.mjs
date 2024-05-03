import { API_JACKETS_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { showLoader, hideLoader } from "./loader.mjs";


async function loadCarousel() {
    showLoader();
    try {
        const jackets = await fetchData(API_JACKETS_URL);
        createCarousel(jackets);
        initCarousel();
    } catch (error) {
        console.error("Failed to load carousel:", error);

    } finally {
        hideLoader();
    }
}

function createCarousel(jackets) {
    const container = document.getElementById('carouselContainer');

    const extraImages = jackets.slice(0, 3);
    const allJackets = jackets.concat(extraImages);

    container.innerHTML = '<div class="carousel-slide">' +
        allJackets.map(jacket => `<img src="${jacket.image}" class="carousel-image">`).join('') +
        '</div>';
}

function initCarousel() {
    const slide = document.querySelector('.carousel-slide');
    const container = document.getElementById('carouselContainer');
    let counter = 0;

    const resetIndex = Math.floor((slide.children.length - 3) / 3);
    const updateCarousel = () => {
        counter++;
        if (counter > resetIndex) {
            counter = 0;
            slide.style.transition = 'none';
            slide.style.transform = `translateX(0px)`;
            requestAnimationFrame(() => {

                requestAnimationFrame(() => {
                    slide.style.transition = 'transform 0.5s ease-in-out';
                    counter = 1;
                    slide.style.transform = `translateX(-${container.clientWidth * counter}px)`;
                });
            });
        } else {
            slide.style.transform = `translateX(-${container.clientWidth * counter}px)`;
        }
    };

    setInterval(updateCarousel, 3000);
}

loadCarousel();

