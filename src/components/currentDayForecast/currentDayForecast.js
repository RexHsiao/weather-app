import React from 'react';
import './currentDayForecast.scss';


const CurrentDayForecast = ({
    location, 
    temperature, 
    weatherIcon,
    weatherDescription,
    max_temp,
    min_temp}) => {
    return (
        <>
            <div><h3>{location}</h3></div>
            <img width="45" src={weatherIcon} alt="" />
            <div className="deg">
                {temperature}
            </div>
            <div className="status">
                {weatherDescription}
            </div>
            <div className="maxMinDeg">
                <div className="minDeg">
                    <div><div className="arrow-down"></div></div>
                    <div className="min degree">{min_temp}</div>
                    <div>Min</div>
                </div>
                <div className="maxDeg">
                    <div><div className="arrow-up"></div></div>
                    <div className="max degree">{max_temp}</div>
                    <div>Max</div>
                </div>
            </div>
        </>
    );
};

export default CurrentDayForecast;