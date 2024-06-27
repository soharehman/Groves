import React from 'react';
import './Video.scss';

const Video = () => {
  return (
    <div className="video-container">
      <h2 className="heading">Our Latest Video</h2>
      <p className="description">Watch this video to learn more about our services and offerings.</p>
      <div className="video-wrapper">
        <div className="thumbnail"></div>
        <div className="play-button">
          <div className="play-circle"></div>
          <div className="play-icon"></div>
        </div>
      </div>
      <div className="info-container">
        <div className="text-content">
          <p className="subheading">Subheading Here</p>
          <p className="info-description">This is a brief description of the content in the video.</p>
        </div>
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default Video;
