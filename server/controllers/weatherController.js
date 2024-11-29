const {fetchWeather} = require('../services/weatherService');

const getWeather = async (req, res) => {
    const city = req.query.city;
    try {
        const weatherData = await fetchWeather(city);

        const hourlyForecast = weatherData.forecast.forecastday[0].hour;

        const currentTime = new Date(weatherData.location.localtime).getHours();

        const next5Hours = Array.from({length: 5}).map((_, i) => {
            const hourIndex = (currentTime + i) % 24;
            const hourData = hourlyForecast[hourIndex];

            return {
                time: new Date(hourData.time).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }),
                temp_c: Math.round(hourData.temp_c),
            };
        });

        res.json({...weatherData, next5Hours});
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch weather data'});
    }
};

module.exports = {getWeather};
