import React from 'react';
import './CurrencyBar.css';

const CurrencyBar = () => {
  return (
    <div className="currency-bar">
        <div className="currency-item">
          <img src="images/Masterless Starglitter.webp" alt="Starglitter" />
          <span className="amount">50</span>
        </div>
        <div className="currency-item">
          <img src="images/Masterless Stardust.webp" alt="Starglitter" />
          <span className="amount">5000</span>
        </div>
        <div className="currency-item">
          <img src="images/Primogems.png" alt="Primogems" />
          <span className="amount">100000</span>
        </div>
        <div className="currency-item">
          <img src="images/Item_Intertwined_Fate.webp" alt="Starglitter" />
          <span className="amount">500</span>
        </div>
      </div>
  );
};

export default CurrencyBar;
