const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware for parsing requests and enabling CORS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files (for production later)
app.use(express.static('dist'));

// Start the server
const port = 8081;
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});

// Root endpoint for testing server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Geonames API endpoint
app.post('/location', async (req, res) => {
    const { location } = req.body;
    const geonamesUrl = `http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=${process.env.GEONAMES_USERNAME}`;

    try {
        const response = await fetch(geonamesUrl);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Error fetching Geonames data:', error);
        res.status(500).send('Error fetching Geonames data');
    }
});

// Weatherbit API endpoint
app.post('/weather', async (req, res) => {
    const { lat, lon } = req.body;
    const weatherbitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_API_KEY}`;

    try {
        const response = await fetch(weatherbitUrl);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Error fetching Weatherbit data:', error);
        res.status(500).send('Error fetching Weatherbit data');
    }
});

// Pixabay API endpoint
app.post('/image', async (req, res) => {
    const { location } = req.body;
    const pixabayUrl = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent(location)}&image_type=photo`;

    try {
        const response = await fetch(pixabayUrl);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Error fetching Pixabay data:', error);
        res.status(500).send('Error fetching Pixabay data');
    }
});

