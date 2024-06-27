// src/components/InfoSection/InfoSection.js
import React from 'react';
import './InfoSection.scss';
import infoImage from '../../assets/images/eb8c9dfc98cefab4ba6ceb811eada199-removebg-preview@2x.png';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-image">
        <img src={infoImage} alt="Info Section" />
      </div>
      <div className="info-content">
        <h2 className="info-heading">Your Heading Here</h2>
        <p className="info-description">Your description goes here. This should be a brief and concise description about the content.</p>
        <button className="info-button">Learn More</button>
      </div>
    </div>
  );
};

export default InfoSection;
