import React from 'react';
import './modeToggle.scss';

const ModeToggle = ({ handleToggle, toggle }) => {
    return (
        <div className="modeToggle">
            <span>LIGHT</span>
            
            <input
                checked={toggle}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: toggle && '#FF0070'}}
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
            
            <span>DARK</span>
        </div>
      );
}

export default ModeToggle;
