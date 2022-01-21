import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './directory.scss';
import PropTypes from 'prop-types';
import Card from '../card';
import CurrentDayForecast from '../currentDayForecast';
import Add from '../add';


const Directory = ({toggle, locations, forecasts, onClick}) => {
    
    const [newForecasts, setNewForecasts] = useState();
    forecasts.then( value => { setNewForecasts(value)});
    
    return (
        <div className="directory">
            {newForecasts?.map(({currentDay}) => (
                    <Link to={`forecast/${currentDay.location}`}>
                    <CurrentDayForecast 
                        {...currentDay} 
                        key={currentDay.location}
                        toggle={toggle}
                    />
                    </Link>
            ))}
            <Card toggle={toggle}>
                <Add />
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