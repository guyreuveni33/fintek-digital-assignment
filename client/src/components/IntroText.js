// src/components/IntroText.js
import React from 'react';
import '../styles/IntroText.css'
const IntroText = ({ isMobile }) => {
    return (
        <div className="intro-text">
            {isMobile ? (
                <p>Use our weather app to see the weather around the world</p>
            ) : (
                <p>
                    Use our weather app<br />to see the weather<br />around the world
                </p>
            )}
        </div>
    );
};

export default IntroText;
