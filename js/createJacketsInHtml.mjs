import { createSingleJacketinHTML } from "./createSingleJacketInHtml.mjs";

function createJacketsInHtml(jackets) {
    const jacketsContainer = document.querySelector('#jacketsSection');
   for (let i = 0; i < jackets.length; i++){
    const jacketHtml = createSingleJacketinHTML(jackets[i]);
    console.log(jacketHtml);
    jacketsContainer.appendChild(jacketHtml);
   }
 }

export { createJacketsInHtml };