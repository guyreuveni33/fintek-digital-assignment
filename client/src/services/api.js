// src/services/api.js

export const fetchWeatherData = async (city) => {
    try {
        const response = await fetch(`http://localhost:5000/weather?city=${city}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch weather data for ${city}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
