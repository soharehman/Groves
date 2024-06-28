import React from 'react';
import './HeroSection.scss';
import arrowIcon from '../../assets/images/icons/Path 41544.png'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
   
      <div className="overlay"></div>

      <div className="hero-content">
        <h2 className="sub-heading">KHAWAJA YANNI</h2>
        <h1 className="main-heading">
          The new <br />
          era of luxury
        </h1>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing<br />
          and typesetting industry. Lorem Ipsum
        </p>
        <button className='btn'>Book reservation now<img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" /></button>
      </div>
    </div>
  );
};

export default HeroSection;

