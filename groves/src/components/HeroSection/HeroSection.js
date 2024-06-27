// src/components/HeroSection/HeroSection.js
import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h2 className="sub-heading">Discover Our Services</h2>
        <h1 className="main-heading">Welcome to Our Landing Page</h1>
        <p>Discover more about us</p>
        <button className="hero-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
