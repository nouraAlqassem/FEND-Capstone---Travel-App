// Function to send a POST request to the server
export const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};


// Function to calculate the countdown in days
export const calculateCountdown = (tripDate, today = new Date()) => {
    const trip = new Date(tripDate); // Trip date
    const differenceInTime = trip.getTime() - today.getTime(); // Difference in milliseconds
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24)); // Convert to days
    return differenceInDays;
};


// Main function to handle search
export const handleSearch = async () => {
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;

    try {
        // Fetch location data
        const geoData = await postData('http://localhost:8081/location', { location });
        const { lat, lng: lon } = geoData.geonames[0];

        // Fetch weather data
        const weatherData = await postData('http://localhost:8081/weather', { lat, lon });

        // Fetch image data
        const imageData = await postData('http://localhost:8081/image', { location });

        // Display results
        const countdown = calculateCountdown(date);
        document.getElementById('result').innerHTML = `
            <h2>Weather for ${location} on ${date}:</h2>
            <p>Days until your trip: ${countdown}</p>
            <p>${weatherData.data[0].weather.description}</p>
            <img src="${imageData.hits[0].webformatURL}" alt="${location}">
        `;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
