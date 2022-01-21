import React from 'react';
import './card.scss';


const Card = ({toggle, id, children}) => {
    return (
        <div id={id} className={`card card-${toggle?'dark':''}`}>
            {children}
        </div>
    );
};

export default Card;