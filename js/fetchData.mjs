
export async function fetchData(url) {
    try {
        // Put loading spinner in its own .mjs 
        // const loadingSpinner = document.getElementById('loading');
        //loadingSpinner.style.display = 'block';

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        // loadingSpinner.style.display = 'none';

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);

        throw error;
    }
}