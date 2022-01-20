import {useState} from 'react';
import axios from 'axios';

import getCurrentDayDetails from '../helpers/getCurrentDayDetails';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getUpcomingForecast from '../helpers/getUpcomingForecast';

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const UseForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);
    const [forecasts, setForecasts] = useState([]);

    const getWoeid = async (location) => {
        const {data} = await axios(`${REQUEST_URL}/search`, {params: { query: location}});

        if (!data || data.length === 0){
            setError('There is no such location');
            setLoading(false);
            return;
        }

        return data;
    }

    const getForecastData = async (woeid) => {
        const { data } = await axios(`${REQUEST_URL}/${woeid}`);

        if (!data || data.length === 0){
            setError('Something went wrong');
            setLoading(false);
            return;
        }

        return data;
    }

    const gatherForecastData = async (data) => {
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayDetails = getCurrentDayDetails(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingForecast(data.consolidated_weather);
        
        setForecast({currentDay, currentDayDetails, upcomingDays});
        setLoading(false);
    }

    const gatherForecastsData = async (data) => {
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayDetails = getCurrentDayDetails(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingForecast(data.consolidated_weather);

        return {currentDay, currentDayDetails, upcomingDays};
    }

    //call the api
    const submitRequest = async (location) => {
        setLoading(true);
        setError(false);
        const response = await getWoeid(location);
        if (!response?.woeid) return;

        const data = await getForecastData(response[0].woeid);
        if (!data) return;

        gatherForecastData(data);
    };

    const submitRequests = async (locations) => {
        setLoading(true);
        setError(false);
        
        for (const location of locations) {
            const response = await getWoeid(location);
            // if (!response?.woeid) continue;
            const data = await getForecastData(response[0].woeid);
            console.log(data.title) ;
            // gatherForecastsData(data);
            // console.log(forecast);
        }

        
        // console.log(woeids);
    }

    return {
        isError, isLoading, forecast, forecasts, submitRequest, submitRequests
    }
};

export default UseForecast;