import React from 'react';
import './App.css';

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
