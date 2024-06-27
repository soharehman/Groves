// src/components/FeaturedSection/FeaturedSection.js
import React from 'react';
import './FeaturedSection.scss';

const FeaturedSection = () => {
  return (
    <div className="featured-section">
      <div className="section-content">
        <h2 className="section-heading">Explore Our Features</h2>
        <p className="section-description">Discover the amazing features we offer.</p>
        <button className="section-button">Learn More</button>
      </div>
      <div className="slider">
        <div className="slider-item large" style={{ backgroundImage: "url('/assets/images/slider/DKSLFAKPogt7W4Dtr3ikEHT7thgkqajNvA5G6zJm.png')" }}></div>
        <div className="slider-item small" style={{ backgroundImage: "url('/assets/images/slider/dxso1228cWyEo9Y8hyjUIa46WVNj5a66xrHnpekJ.png')" }}></div>
        <div className="slider-item large" style={{ backgroundImage: "url('/assets/images/slider/E3X3DJS9gC0f5znLk9bxGE2OVo5LDR5hIy2Tms0J.png')" }}></div>
        <div className="slider-item small" style={{ backgroundImage: "url('/assets/images/slider/eCQrqHBO1EiBzeZMSgFlqATb9F06Cu3va2ELmg2u.png')" }}></div>
      </div>
    </div>
  );
};

export default FeaturedSection;
