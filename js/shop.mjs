import { API_JACKETS_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { createJacketsInHtml } from "./createJacketsInHtml.mjs";

let jackets = []
let genderFilter = 'All';

async function shop() {
    jackets = await fetchData(API_JACKETS_URL);
    createJacketsInHtml(jackets, genderFilter);
}

const filterAllGenderButton = document.getElementById('all-button');
const filterMenGenderButton = document.getElementById('men-button');
const filterWomenGenderButton = document.getElementById('women-button');

filterAllGenderButton.addEventListener('click', () => {
    genderFilter = 'All';
    createJacketsInHtml(jackets, genderFilter);
})
filterMenGenderButton.addEventListener('click', () => {
    genderFilter = 'Male';
    createJacketsInHtml(jackets, genderFilter);
})
filterWomenGenderButton.addEventListener('click', () => {
    genderFilter = 'Female';
    createJacketsInHtml(jackets, genderFilter);
})

shop()
