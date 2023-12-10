import React, { useState } from 'react';
import './App.css'; // Create this file for your global styles

import BannerContainer from './components/BannerContainer';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
    <Banner/>
      <BannerContainer />
    </div>
  );
}

export default App;
