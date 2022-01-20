import React from 'react';
import './page.scss';

import DetailBackground from '../backgrounds/detailBackground';
import HomeBackground from '../backgrounds/homeBackground';
import NavBar from '../navBar';
import Directory from '../directory';



const Page = ({children, page, mode, info, handleToggle, cities}) => {
    const isOn = mode === 'dark';
    return (
        <div className="page">
            <NavBar 
                mode={mode}
                info={info}
                isOn={isOn} 
                handleToggle={handleToggle}
            />
            {/* <Error /> */}
            {/* <Loader /> */}
            {/* <DetailForecast /> */}
            {/* {page === 'home' && 
                (<HomeBackground mode={mode}><Directory mode={mode} cities={cities}/></HomeBackground>)
            } */}
            {children}
        </div>
    );
};

export default Page;