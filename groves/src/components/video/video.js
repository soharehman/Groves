import React from 'react';
import './Video.scss';

const Video = () => {
  return (
    <div className="video-container">
      <h2 className="heading">Mall Of: Endless Possibilities</h2>
      <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        <br /> the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        <br />scrambled it to make a type specimen book.
      </p>
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
