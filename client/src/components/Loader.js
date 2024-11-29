// src/components/Loader.js
import React from 'react';
import '../styles/Loader.css'; // Import loader-specific styles

const Loader = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner-wrapper">
                <div className="loading-spinner"></div>
                <div className="loading-pulse"></div>
            </div>
            <p className="loading-text">Loading Weather Data...</p>
        </div>
    );
};

export default Loader;
