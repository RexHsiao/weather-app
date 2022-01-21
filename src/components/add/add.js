import React from 'react';
import './add.scss';

const Add = ({onClick}) => (
    <div className="add-container" onClick={onClick}>
        <div className="vertical"></div>
        <div className="horizontal"></div>
    </div>
);

export default Add;