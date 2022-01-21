import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './homePage.scss';

import CITIES from './homeData';
// import {locations} from '../../helpers/getLocations';

import Page from '../../components/page';
import HomeBackground from '../../components/backgrounds/homeBackground';
import Directory from '../../components/directory';
import Loader from '../../components/loader';
import Error from '../../components/error';

import useForecast from '../../hooks/UseForecast';

const HomePage = () => {
    const { isError, isLoading, forecast, submitRequest, submitRequests } = useForecast();
    const [locations, setLocations] = useState(CITIES);
    const mode = 'dark';
    
    const [forecasts, setForecasts] = useState( async () => {
        const cities = [];
        locations.map(location => cities.push(location.title));
        const initialForecasts = await submitRequests(cities);
        return initialForecasts;
    });
    
    return (
        <Page 
            page="home"
            mode={mode}
            info="TODAY"
        >
            <HomeBackground mode={mode}>
                {!isLoading && <Directory mode={mode} locations={locations} forecasts={forecasts}/>}
                {isLoading && <Loader />}
                {isError && <Error message={isError} />}
            </HomeBackground>
        </Page>
    );
};


export default HomePage;