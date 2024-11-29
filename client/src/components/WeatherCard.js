import React from 'react';
import '../styles/WeatherCard.css';
import Loader from './Loader';

const WeatherCard = ({ data, isLoading }) => {
    return (
        <div className="weather-card-container">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="weather-card">
                    <div className="location_and_time">
                        <h2>{data.location.name}</h2>
                        <h3>{data.location.country}</h3>
                        <p>{data.location.localtime}</p>
                    </div>
                    <div className="temp">
                        <h1>
                            {data.current.temp_c}
                            <span className="degree-symbol">°</span>
                        </h1>
                        <p>{data.current.condition.text}</p>
                    </div>
                    <div className="details">
                        <div>
                            <div className="detail-label">Precipitation</div>
                            <div className="detail-value">{data.current.precip_mm} mm</div>
                        </div>
                        <div>
                            <div className="detail-label">Humidity</div>
                            <div className="detail-value">{data.current.humidity}%</div>
                        </div>
                        <div>
                            <div className="detail-label">Wind</div>
                            <div className="detail-value">{data.current.wind_kph} km/h</div>
                        </div>
                    </div>
                    <div className="hourly-forecast">
                        <div className="hourly-forecast-container">
                            {data.next5Hours.map((hour, index) => (
                                <div key={index} className="hour-card">
                                    <p className="hour">{hour.time}</p>
                                    <p className="hour_temp">{hour.temp_c}°</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherCard;
