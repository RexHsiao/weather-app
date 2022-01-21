import React from 'react';
import './page.scss';

import DetailBackground from '../backgrounds/detailBackground';
import HomeBackground from '../backgrounds/homeBackground';
import NavBar from '../navBar';
import Directory from '../directory';



const Page = ({children, page, mode, info, handleToggle, toggle, cities}) => {
    const isOn = mode === 'dark';
    return (
        <div className="page">
            <NavBar 
                mode={mode}
                info={info}
                toggle={toggle} 
                handleToggle={handleToggle}
            />
            {children}
        </div>
    );
};

export default Page;