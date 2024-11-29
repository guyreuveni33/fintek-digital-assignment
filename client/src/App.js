import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';
import logo from './assets/logo.png';
import {fetchWeatherData} from './services/api';
import CoordinatesInfo from "./components/CoordinatesInfo";
import IntroText from "./components/IntroText";
import useIsMobile from './hooks/useIsMobile';
import './styles/Toast.css'
const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const isMobile = useIsMobile();

    const fetchWeather = async (city) => {
        try {
            setIsLoading(true);
            setErrorMessage('');
            const data = await fetchWeatherData(city);
            setWeatherData(data);
        } catch (error) {
            console.error(error.message);
            setWeatherData(null);
            setErrorMessage('Failed to fetch weather data. Please try again.');
            setTimeout(() => setErrorMessage(''), 3000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="app-container">
            {errorMessage && (
                <div className="toast toast-top">{errorMessage}</div>
            )}
            <div className="content">
                <div className="left-section">
                    <img src={logo} alt="Fintek Logo" className="logo"/>
                    <IntroText isMobile={isMobile}/>
                    <SearchBar fetchWeather={fetchWeather}/>
                    {!isMobile && <CoordinatesInfo/>}
                </div>
                <div className="right-section">
                    {isLoading ? (
                        <WeatherCard isLoading={true}/>
                    ) : weatherData ? (
                        <div className="weather-container">
                            <WeatherCard data={weatherData} isLoading={false}/>
                        </div>
                    ) : (
                        <div className="placeholder-message">
                            Enter a city name to discover its current weather conditions
                        </div>
                    )}
                </div>
                {isMobile && <CoordinatesInfo/>}
            </div>
        </div>
    );
};

export default App;