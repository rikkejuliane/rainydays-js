import { API_POSTS_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { createJacketsInHtml } from "./createJacketsInHtml.mjs";



async function shop() {
    const jackets = await fetchData(API_POSTS_URL);
    console.log(jackets)
    createJacketsInHtml(jackets);
}
shop()