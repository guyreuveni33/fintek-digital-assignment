const axios = require('axios');
require('dotenv').config(); // Load environment variables

const BASE_URL = 'http://api.weatherapi.com/v1';

const fetchWeather = async (city) => {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
        params: {
            key: process.env.API_KEY,
            q: city,
            days: 1,
        },
    });
    return response.data;
};

module.exports = { fetchWeather };
