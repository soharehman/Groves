import React from 'react';
import './Video.scss';
import arrowIcon from '../../assets/images/icons/Path 41544.png'; 

const Video = () => {
  return (
    <div className="video-container">
      <h2 className="video-heading">Mall Of: Endless Possibilities</h2>
      <p className="video-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        <br /> the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        <br />scrambled it to make a type specimen book.
      </p>
      <div className="video-wrapper">
        <div className="video-thumbnail"></div>
        <div className="video-play-button">
          <div className="video-play-circle"></div>
          <div className="video-play-icon"></div>
        </div>
      </div>
      <div className="video-info-container">
        <div className="video-text-content">
          <p className="video-subheading">25 SR/GUEST</p>
          <p className="video-heading-video">Get your General Access Ticket</p>
          <p className="video-info-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br />Ipsum has been the industry's standard dummy text.</p>
        </div>
        <div className="video-icon">
          <img src={arrowIcon} alt="Arrow Icon" />
        </div>
      </div>
    </div>
  );
};

export default Video;
