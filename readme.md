# FEND Capstone - Travel App

## Description
The Travel App is a web application that allows users to search for weather forecasts, images, and a countdown for their travel destinations. This project integrates multiple external APIs to provide users with accurate and visually appealing data about their trips.

## Features
- Fetches location data using **Geonames API**.
- Retrieves weather forecasts using **Weatherbit API**.
- Displays images of the destination using **Pixabay API**.
- Calculates the countdown to the trip date.

## Installation
To run this project locally, ensure that you have **Node.js v20.16.0** installed. If you are using a different version, please install the correct version using [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) or download the appropriate version from [Node.js](https://nodejs.org/).

### Steps:
1. **Clone the Repository**
   git clone https://github.com/nouraAlqassem/FEND-Capstone---Travel-App.git
   cd FEND-Capstone---Travel-App

### Install Dependencies:
npm install

### Create .env File Add your API keys in the .env file:
GEONAMES_USERNAME=your_geonames_username
WEATHERBIT_API_KEY=your_weatherbit_api_key
PIXABAY_API_KEY=your_pixabay_api_key

### Run the Development Server:
npm run dev

### Build and Run the Production Server:
npm run build
npm run start

### Node.js Version:
This project requires Node.js v20.16.0 to run. You can check your Node.js version using:
node -v

If your version is different, install the correct version using Node Version Manager (NVM) or download it from Node.js.

### Scripts:
Here are the available npm scripts:

- npm run start: Starts the Express server for production.
- npm run dev: Runs Webpack in development mode with hot reloading.
- npm run build: Builds the project for production.
- npm run test: Runs unit tests using Jest.

### APIs Used:
This project uses the following APIs:

1- Geonames API: To fetch latitude and longitude for the entered location.
2- Weatherbit API: To retrieve weather forecasts.
3- Pixabay API: To fetch images of the destination.

### Testing:
Unit tests are written using Jest. Run the tests with:
npm run test
