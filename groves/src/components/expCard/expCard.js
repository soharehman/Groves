import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpCard.scss';
import image1 from '../../assets/images/3AdCcTiE39OS7dVYPNyP6lu9AhRXP4L3JjZWsbjy@2x.png';
import image2 from '../../assets/images/0U7dxZztz3bK8LSrfYoLemPNnZLtVG7cvFnM1rSQ.png';
import image3 from '../../assets/images/4SqvqTmsoewoyrgO74gQsBuSaBcnKXatA8ljCWaY.png';
import arrowIcon from '../../assets/images/icons/Path 41544.png'; 

const wipes = [
  { src: image1, heading: 'Restaurants' },
  { src: image2, heading: 'Experiences' },
  { src: image3, heading: 'Events' },
];

const ExpCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wipes.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row align-items-center mb-4">
        <div className="col-12 col-md-4 text-left">
          <h1 className="exp-card-heading">Curate your <br /> experience <br /> as you like</h1>
          <button className="btn btn-primary exp-card-button">
            Book ticket
            <img src={arrowIcon} alt="Arrow Icon" className="exp-card-arrow-icon ms-2" />
          </button>
        </div>
        <div className="col-12 col-md-8">
          <div className="carousel-wrapper">
            <ul className="carousel-track list-unstyled d-flex">
              {wipes.map((wipe, index) => (
                <li
                  className={`carousel-item ${index === currentIndex ? 'active-swipe big' : 'small'}`}
                  key={index}
                >
                  <img className="carousel-image img-fluid" src={wipe.src} alt={`slide-${index}`} />
                  <h3 className="carousel-heading">{wipe.heading}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
