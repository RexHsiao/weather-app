import React from 'react';
import './modeToggle.scss';

const ModeToggle = ({ isOn, handleToggle }) => {
    return (
        <div className="modeToggle">
            <span>LIGHT</span>
            
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && '#FF0070'}}
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
