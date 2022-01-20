import React from 'react';
import './searchPage.scss';

import Page from '../../components/page';
import DetailBackground from '../../components/backgrounds/detailBackground';
import Form from '../../components/form';
import Board from '../../components/board';
import Loader from '../../components/loader';
import Error from '../../components/error';

import useForecast from '../../hooks/UseForecast';


const SearchPage = () => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const onSubmit = (value) => {
        submitRequest(value);
    }
    
    return (
        <Page
            page="search"
            mode="dark"
            info="SEARCH"
        >
            <DetailBackground mode="dark">
                <Board>
                    {!isLoading && <Form submitSearch={onSubmit}/>}
                    {isLoading && <Loader />}
                    {isError && <Error message={isError} />}
                </Board>
            </DetailBackground>
        </Page>
    );
};
export default SearchPage;