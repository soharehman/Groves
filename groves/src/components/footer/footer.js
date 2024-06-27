// src/components/Footer/Footer.js
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-separator"></div>
      <div className="footer-row">
        <div className="footer-column">
          <h2 className="footer-heading">Download Groove App</h2>
          <div className="footer-download-buttons">
            <img src="/path/to/apple-store.png" alt="Apple Store" />
            <img src="/path/to/play-store.png" alt="Play Store" />
          </div>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-column">
          <h3>Column 1 Heading</h3>
          <p>Column 1 details...</p>
        </div>
        <div className="footer-column">
          <h3>Column 2 Heading</h3>
          <p>Column 2 details...</p>
        </div>
        <div className="footer-column">
          <h3>Column 3 Heading</h3>
          <p>Column 3 details...</p>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-column">
          <img src="/path/to/logo.png" alt="Logo" className="footer-logo" />
          <div className="footer-icons">
            <img src="/path/to/icon1.png" alt="Icon 1" />
            <img src="/path/to/icon2.png" alt="Icon 2" />
            <img src="/path/to/icon3.png" alt="Icon 3" />
          </div>
        </div>
        <div className="footer-column">
          <p>Some details...</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
