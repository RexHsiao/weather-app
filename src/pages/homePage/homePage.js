import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './homePage.scss';
// import {locations} from '../../helpers/getLocations';

import Page from '../../components/page';
import HomeBackground from '../../components/backgrounds/homeBackground';
import Directory from '../../components/directory';

import useForecast from '../../hooks/UseForecast';

const HomePage = () => {
    const { isError, isLoading, forecast, submitRequest, submitRequests } = useForecast();
    // console.log(forecast.currentDay);
    const mode = 'dark';
    const [locations, setLocations] = useState([
        {
            id: 1,
            title: "Brisbane"
        },
        {
            id: 2,
            title: "Sydney"
        },
        {
            id: 3,
            title: "Melbourne"
        },
        {
            id: 4,
            title: "Gold Coast"
        }
    ]);
    const [forecasts, setForecasts] = useState(() => {
        const cities = [];
        locations.map(location => cities.push(location.title));
        const initialForecasts = submitRequests(cities);
        return initialForecasts;
    })

    return (
        <Page 
            page="home"
            mode={mode}
            info="TODAY"
        >
            <HomeBackground mode={mode}>
                <Directory mode={mode} locations={locations} forecast={forecast}/>
                {console.log(forecasts)}
            </HomeBackground>
        </Page>
    );
};


export default HomePage;