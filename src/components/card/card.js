import React from 'react';
import './card.scss';


const Card = ({mode, children}) => {
    return (
        <div className={`card card-${mode}`}>
            {children}
        </div>
    );
};

export default Card;