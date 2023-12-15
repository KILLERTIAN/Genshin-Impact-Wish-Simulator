import React, { useState } from 'react';
import './BannerContainer.css';
import CurrencyBar from './CurrencyBar';

function BannerContainer() {
  const [selectedBanner, setSelectedBanner] = useState('ayato3.3.webp');
  const [activeBanner, setActiveBanner] = useState(null);

  const handleBannerChange = (banner) => {
    setSelectedBanner(banner);
    setActiveBanner(banner);
  };

  const handleSidebarReset = () => {
    setActiveBanner(null);
  };

  return (
    <div className="container">
      {/* <CurrencyBar/> */}
      <div className="currency-bar">
        <div className="currency-item">
          <img src="images/Masterless Starglitter.webp" alt="Starglitter" />
          <span className="amount">42</span>
        </div>
        <div className="currency-item">
          <img src="images/Masterless Stardust.webp" alt="Starglitter" />
          <span className="amount">5600</span>
        </div>
        <div className="currency-item">
          <img src="images/Primogems.png" alt="Primogems" />
          <span className="amount">100000</span>
        </div>
        <div className="currency-item">
          <img src="images/Item_Intertwined_Fate.webp" alt="Starglitter" />
          <span className="amount">500</span>
        </div>

        {/* Add more currency items as needed */}
      </div>
      <div className="header-sidebar">
      <button
          className={`lim-banner ${activeBanner === 'ayato3.3.webp' ? 'active' : ''}`}
          onClick={() => handleBannerChange('ayato3.3.webp')}
        >
          <img src="images/ayato3.3.webp" alt="Lim Banner" />
        </button>
        <button
          className={`lim-banner ${activeBanner === 'Raiden3.3.webp' ? 'active' : ''}`}
          onClick={() => {
            handleBannerChange('Raiden3.3.webp');
            
          }}
        >
          {activeBanner === 'Raiden3.3.webp' ? (
            <img src="images/cb2dd55afc125e4d2e4d1ba1e659abf5.png" alt="Lim Banner" />
          ) : (
            <img src="images/198e6c25696161f5905fc2498788acb5.png" alt="Lim Banner" />
          )}
        </button>
        <button className="wep-banner" onClick={() => handleBannerChange('weapon banner.jpg')}>
          {/* Uncomment and add onClick handler for weapon banner */}
          <img src="images/weapon banner.jpg" alt="Wep Banner" />
        </button>
        <button className={`std-banner ${activeBanner === 'standard banner.webp' ? 'active' : ''}`}
          onClick={() => {
            handleBannerChange('standard banner.webp');
            
          }}>
          {activeBanner === 'standard banner.webp' ? (
            <img src="images/460696cfcd370411316c508959ca6b23.png" alt="Std Banner" />
          ) : (
            <img src="images/9f09ce550d7b5f24eaee126bf51a497b.png" alt="Std Banner" />
          )}
          
        </button>
      </div>

      <section>
        <div className="footer">
          <button>Shop</button>
          <button>Details</button>
          <button>History</button>
        </div>
        <div className="wish-button">
          <button>Wish x1
            <span><img src="images/Item_Intertwined_Fate.webp" alt="" />x 1</span>
          </button>
          <button>Wish x10
            <span><img src="images/Item_Intertwined_Fate.webp" alt="" />x 10</span>
          </button>
        </div>
      </section>

      <div className="banner-screen">
        <img src={`images/${selectedBanner}`} alt="Banner" />
      </div>
    </div>
  );
}

export default BannerContainer;
