import React from 'react';
import './detailBackground.scss';

const DetailBackground = ({children, mode}) => (
    <div className={`detailBackground ${mode}`}>
        <div className="background">
            <div className="circle" id="C1"></div>
            <div className="circle" id="C2"></div>
            <div className="circle" id="C3"></div>
            <div className="circle" id="C4"></div>
        </div>
        <div className="content">
            {children}
        </div>
    </div>
);

export default DetailBackground;