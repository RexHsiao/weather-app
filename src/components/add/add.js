import React from 'react';
import './add.scss';

import { Link } from 'react-router-dom';

const Add = () => (
    <div className="add-box">
        <Link to="/search">
            <div className="add-container">
                <div className="vertical"></div>
                <div className="horizontal"></div>
            </div>
        </Link>
    </div>
);

export default Add;