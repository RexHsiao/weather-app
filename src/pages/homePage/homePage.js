import React, { useState, useEffect } from 'react';
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
import ArrowBack from '../../components/arrowBack';

import useForecast from '../../hooks/UseForecast';

const HomePage = ({handleToggle, toggle}) => {
    const { isError, isLoading, forecast, submitRequest, submitRequests, resetForecast } = useForecast();
    const [locations, setLocations] = useState(CITIES);
    const [info, setInfo] = useState('TODAY');
    const [isSearching, setSearching] = useState(false);
    const [forecasts, setForecasts] = useState( async () => {
        const cities = [];
        locations.map(location => cities.push(location.title));
        const initialForecasts = await submitRequests(cities);
        return initialForecasts;
    });

    useEffect(() => {
        if(isSearching){
            infoSetting("SEARCH");
        }
        if(!isSearching || !forecast){
            infoSetting("TODAY");
        }
        if(forecast){
            infoSetting(forecast.currentDay.date);
        }
    }, [isSearching, forecast]);

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
        setSearching(!isSearching)
    }

    const infoSetting = (info) => {
        setInfo(info);
    }

    const onSubmit = async (value) => {
        submitRequest(value);
    };

    const backHome = () => {
        resetForecast();
        setSearching(false);
    }
    
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
                            infoSetting={infoSetting}
                        />
                    }
                    {isLoading && <Loader />}
                    {isError && <Error message={isError} />}
                </HomeBackground>
            }
            {isSearching && !forecast &&
                <DetailBackground toggle={toggle}>
                    <Board toggle={toggle}>
                        <ArrowBack backHome={backHome}/>
                        {!isLoading && <Form submitSearch={onSubmit} toggle={toggle}/>}
                        {isLoading && <Loader />}
                        {isError && <Error message={isError} />}
                    </Board>
                </DetailBackground>
            }
            {forecast && 
                <DetailBackground toggle={toggle}>
                    <Forecast forecast={forecast} backHome={backHome}/>
                </DetailBackground> 
            }
        </Page>
    );
};


export default HomePage;