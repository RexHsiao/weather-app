import React, {useState} from 'react';
import './directory.scss';
import PropTypes from 'prop-types';
import Card from '../card';
import CurrentDayForecast from '../currentDayForecast';
import Add from '../add';


const Directory = ({mode, locations, forecasts, onClick}) => {
    
    const [newForecasts, setNewForecasts] = useState();
    forecasts.then( value => { setNewForecasts(value)});
    
    return (
        <div className="directory">
            {newForecasts?.map(({currentDay}) => (
                <Card mode={mode} key={currentDay.location}>
                    <CurrentDayForecast 
                        {...currentDay}
                    />
                </Card>
            ))}
            <Card mode={mode}>
                <Add onClick={onClick}/>
            </Card>
        </div>
    );
};

Directory.propTypes = {
    forecasts: PropTypes.shape({
        currentDay: PropTypes.object, 
        currentDayDetails: PropTypes.array, 
        upcomingDays: PropTypes.array
    })
};

export default Directory;