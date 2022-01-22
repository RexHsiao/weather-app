import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './homePage.scss';

import CITIES from './homeData';
// import {locations} from '../../helpers/getLocations';

import Page from '../../components/page';
import HomeBackground from '../../components/backgrounds/homeBackground';
import DetailBackground from '../../components/backgrounds/detailBackground';
import Form from '../../components/form';
import Board from '../../components/board';
import Directory from '../../components/directory';
import Loader from '../../components/loader';
import Error from '../../components/error';
import Forecast from '../../components/forecast';

import useForecast from '../../hooks/UseForecast';

const HomePage = ({handleToggle, toggle}) => {
    const { isError, isLoading, forecast, submitRequest, submitRequests } = useForecast();
    const [locations, setLocations] = useState(CITIES);
    const [info, setInfo] = useState('TODAY');
    const [isSearching, setSearching] = useState(false);
    const [forecasts, setForecasts] = useState( async () => {
        const cities = [];
        locations.map(location => cities.push(location.title));
        const initialForecasts = await submitRequests(cities);
        return initialForecasts;
    });

    const clearForecasts = () => {
        setForecasts(null);
    };

    const initForecasts = async () => {
        const cities = [];
        locations.map(location => cities.push(location.title));
        const initialForecasts = await submitRequests(cities);
        setForecasts(initialForecasts);
    };

    const searchSetting = () => {
        setSearching(!isSearching);
    }

    const infoSetting = (info) => {
        setInfo(info);
    }

    const onSubmit = (value) => {
        submitRequest(value);
    };
    
    return (
        <Page 
            handleToggle={handleToggle}
            toggle={toggle}
            info={info}
        >   
            {(!forecast && !isSearching) && 
                <HomeBackground toggle={toggle}>
                    {!isLoading && 
                        <Directory 
                            toggle={toggle}
                            locations={locations} 
                            forecasts={forecasts}
                            searchSetting={searchSetting}
                            submitSearch={onSubmit}
                        />
                    }
                    {isLoading && <Loader />}
                    {isError && <Error message={isError} />}
                </HomeBackground>
            }
            {isSearching && !forecast &&
                <DetailBackground toggle={toggle}>
                    <Board toggle={toggle}>
                        {!isLoading && <Form submitSearch={onSubmit} toggle={toggle}/>}
                        {isLoading && <Loader />}
                        {isError && <Error message={isError} />}
                    </Board>
                </DetailBackground>
            }
            {forecast && 
                <DetailBackground toggle={toggle}>
                    <Forecast forecast={forecast} />
                </DetailBackground> 
            }
        </Page>
    );
};


export default HomePage;