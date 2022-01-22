import React, { useState } from 'react';

import HomePage from '../src/pages/homePage';
import SearchPage from '../src/pages/searchPage';
import DetailPage from '../src/pages/detailPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  const [ toggle, setToggle ] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div>
      <HomePage handleToggle={handleToggle} toggle={toggle}/>
    </div>
  );
}

export default App;
