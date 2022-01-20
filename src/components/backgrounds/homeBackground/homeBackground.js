import React from 'react';
import './homeBackground.scss';

const HomeBackground = ({children, mode}) => (
    <div className={`homeBackground ${mode}`}>
        {children}
    </div>
);

export default HomeBackground;