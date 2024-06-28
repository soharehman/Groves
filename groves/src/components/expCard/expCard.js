// // src/components/FeaturedSection/FeaturedSection.js
// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import './FeaturedSection.scss';
// import image1 from '../../assets/images/slider/DKSLFAKPogt7W4Dtr3ikEHT7thgkqajNvA5G6zJm.png';
// import image2 from '../../assets/images/slider/dxso1228cWyEo9Y8hyjUIa46WVNj5a66xrHnpekJ.png';
// import image3 from '../../assets/images/slider/E3X3DJS9gC0f5znLk9bxGE2OVo5LDR5hIy2Tms0J.png';
// import image4 from '../../assets/images/slider/eCQrqHBO1EiBzeZMSgFlqATb9F06Cu3va2ELmg2u.png';

// const images = [image1, image2, image3, image4];

// const FeaturedSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleImageClick = (index) => {
//     setActiveIndex(index);
//   };

//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: false,
//     beforeChange: (current, next) => setActiveIndex(next),
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="featured-section">
//       <div className="section-content">
//         <h2 className="section-heading">Explore Our Features</h2>
//         <p className="section-description">Discover the amazing features we offer.</p>
//         <button className="section-button">Learn More</button>
//       </div>
//       <Slider {...settings} className="slider">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`slider-item ${index === activeIndex ? 'large' : 'small'}`}
//             onClick={() => handleImageClick(index)}
//           >
//             <img src={image} alt={`Feature ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default FeaturedSection;
