import React from 'react';
import './CardSection.scss';
import cardImage1 from '../../assets/images/cards/dHEj25TrE7SrzXaL1x4KP8RzTs7kWPLBNkYFczBk.png';
import cardImage2 from '../../assets/images/cards/1JNlgpmwjiWgOy57Az5CJAN4YNZI4MfsnTJkiW6R.png';
import cardImage3 from '../../assets/images/cards/9brYRiLGV1VNEqZ6yAMmIL5hjLXxbD48y0uuMv0R.png';
import cardImage4 from '../../assets/images/cards/6UgrJYXmNOcTynEUZksrJwSXtl3saI3wxgkdJzWv.png';
import arrowIcon from '../../assets/images/icons/Path 41544.png'; // Ensure the correct path

const cards = [
  { image: cardImage1, title: "Vida Vera", label: "100 SR PER GUEST" },
  { image: cardImage2, title: "Zama Zulu", label: "100 SR PER GUEST" },
  { image: cardImage3, title: "Khawaja Yanni", label: "100 SR PER GUEST" },
  { image: cardImage4, title: "Yamagata", label: "100 SR PER GUEST" }
];

const CardSection = () => {
  return (
    <div className="cardsection">
      <div className="cardsection-header">
        <h2 className="cardsection-heading">Experience the Finest Cuisine</h2>
        <p className="cardsection-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br/>the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and <br/> scrambled it to make a type specimen book. </p>
      </div>
      <div className="cardsection-content">
        {cards.map((card, index) => (
          <div key={index} className="cardsection-card">
            <div className="cardsection-card-image-wrapper">
              <img src={card.image} alt={card.title} className="cardsection-card-image" />
            </div>
            <div className="cardsection-card-content">
              <h3 className="cardsection-card-title">{card.title}</h3>
              <button className="cardsection-card-label">{card.label}</button>
              <img src={arrowIcon} alt="Arrow Icon" className="cardsection-card-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
