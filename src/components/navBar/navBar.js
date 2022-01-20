import React from 'react';
import './navBar.scss';

import Logo from './components/logo';
import Info from './components/info';
import ModeToggle from './components/modeToggle';

const NavBar = ({mode, info, isOn, handleToggle}) => (
    <div className={`navBar navBar-${mode}`}>
        <Logo />
        <Info>{info}</Info>
        <ModeToggle isOn={isOn} handleToggle={handleToggle}/>
    </div>
);

export default NavBar;