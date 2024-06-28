import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeaturedSection.scss';
import image1 from '../../assets/images/slider/DKSLFAKPogt7W4Dtr3ikEHT7thgkqajNvA5G6zJm.png';
import image2 from '../../assets/images/slider/dxso1228cWyEo9Y8hyjUIa46WVNj5a66xrHnpekJ.png';
import image3 from '../../assets/images/slider/E3X3DJS9gC0f5znLk9bxGE2OVo5LDR5hIy2Tms0J.png';
import image4 from '../../assets/images/slider/eCQrqHBO1EiBzeZMSgFlqATb9F06Cu3va2ELmg2u.png';
import arrowIcon from '../../assets/images/icons/Path 41544.png';

const images = [image1, image2, image3, image4];
const titles = ["Little Krazy", "Hawanium Groves City", "Picnic Market", "Lucawa"];

const FeaturedSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const slides = document.querySelectorAll('.featured-slider-item');
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add('featured-large');
        slide.classList.remove('featured-small');
      } else {
        slide.classList.remove('featured-large');
        slide.classList.add('featured-small');
      }
    });
  }, [currentSlide]);

  return (
    <div className="featured-section container">
      <div className="row mb-4">
        <div className="col-12 text-left">
          <h2 className="featured-section-heading">Book General Access ticket and <br /> enjoy the attractions for free</h2>
          <button className="featured-btn btn btn-lg btn-gradient mt-3">Book General access ticket
            <img src={arrowIcon} alt="Arrow Icon" className="featured-arrow-icon ms-2" />
          </button>
        </div>
      </div>
      <Slider {...settings} className="featured-slider row g-3">
        {images.map((image, index) => (
          <div
            key={index}
            className={`featured-slider-item col ${index % 2 === 0 ? 'featured-large' : 'featured-small'}`}
          >
            <img src={image} alt={`Feature ${index + 1}`} className="img-fluid" />
            <div className="featured-image-heading">{titles[index]}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedSection;
