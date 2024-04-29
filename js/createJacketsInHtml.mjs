import { createSingleJacketinHTML } from "./createSingleJacketInHtml.mjs";

export function createJacketsInHtml(jackets, genderFilter) {
  const jacketsContainer = document.querySelector('#jacketsSection');
  jacketsContainer.textContent = '';

  jackets
    .filter((jackets) => {
      if (genderFilter === 'All') {
        return true;
      }
      if (genderFilter === 'Male' && jackets.gender == 'Male') {
        return true;
      }
      if (genderFilter === 'Female' && jackets.gender == 'Female') {
        return true;
      }
    })
    .forEach((jackets) => {
      const jacketHtml = createSingleJacketinHTML(jackets);
      jacketsContainer.appendChild(jacketHtml);
    })
}