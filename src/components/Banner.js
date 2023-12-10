import React from 'react';
import './BannerContainer';
import './Banner.css';

const Banner = ({ bannerName, imagePath }) => {
  console.log('imagePath:', imagePath);
  return (
    <div className="banner">
      <img className="background-image" src="images/Wish Screen Background.webp" alt="Wish Background" />
      
    </div>
  );
};

export default Banner;
