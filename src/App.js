import React, { useState } from 'react';

import HomePage from '../src/pages/homePage';
import SearchPage from '../src/pages/searchPage';
import DetailPage from '../src/pages/detailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  const [ toggle, setToggle ] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage handleToggle={handleToggle} toggle={toggle}/>}/>
        <Route exact path="/search" element={<SearchPage handleToggle={handleToggle} toggle={toggle}/>}/>
        <Route exact path="/search/:location" element={<DetailPage handleToggle={handleToggle} toggle={toggle}/>}/>
        <Route exact path="/forecast/:location" element={<DetailPage handleToggle={handleToggle} toggle={toggle}/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
