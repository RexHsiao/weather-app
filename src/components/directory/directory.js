import React from 'react';
import './directory.scss';

import Card from '../card';
import CurrentDayForecast from '../currentDayForecast';


const Directory = ({mode, locations}) => {

    return (
        <div className="directory">
            {locations.map(location => (
                <Card mode={mode} key={location.id}>
                    <CurrentDayForecast 
                        location={location.title}
                    />
                </Card>
            ))}

        </div>
    );
};

export default Directory;