// async function fetchData(url) {
//     try {
//         const res = await fetch(url);
//         return await res.json();
//     } catch (err) {
//         console.error('Error fetching data:', err);
//     }
// }

//CORREGIDO

function handleError(error) {
    console.error('API Error:', error.message);
}

async function fetchData(url) {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        handleError(err);
    }
}

