import React from 'react';
import './currentDayDetailItem.scss';

const CurrentDayDetailItem = ({name, value, unit}) => (
    <div className="detailItem">
        <p>{value} {unit}</p>
        <h5>{name.toUpperCase()}</h5>   
    </div>
);

export default CurrentDayDetailItem;