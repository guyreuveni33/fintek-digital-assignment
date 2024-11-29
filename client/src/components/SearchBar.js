import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ fetchWeather }) => {
    const [city, setCity] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            setShowToast(false);
            fetchWeather(city);
        } else {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        }
    };

    return (
        <div className="search-container">
            <form className="search-bar" onSubmit={handleSubmit}>
                <label htmlFor="city-input">City name</label>
                <div className="input-wrapper">
                    <button type="submit" className="search-button">Check</button>
                    <input
                        id="city-input"
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
            </form>
            {showToast && <div className="toast toast-top">Please enter a city name!</div>}
        </div>
    );
};

export default SearchBar;
