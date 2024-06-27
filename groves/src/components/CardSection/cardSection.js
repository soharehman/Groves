// src/components/CardSection/CardSection.js
import React from 'react';
import './CardSection.scss';
import cardImage1 from '../../assets/images/cards/dHEj25TrE7SrzXaL1x4KP8RzTs7kWPLBNkYFczBk.png';
import cardImage2 from '../../assets/images/cards/1JNlgpmwjiWgOy57Az5CJAN4YNZI4MfsnTJkiW6R.png';
import cardImage3 from '../../assets/images/cards/9brYRiLGV1VNEqZ6yAMmIL5hjLXxbD48y0uuMv0R.png';
import cardImage4 from '../../assets/images/cards/6UgrJYXmNOcTynEUZksrJwSXtl3saI3wxgkdJzWv.png';

const cards = [
  { image: cardImage1, title: "Card 1", label: "Learn More" },
  { image: cardImage2, title: "Card 2", label: "Discover" },
  { image: cardImage3, title: "Card 3", label: "Explore" },
  { image: cardImage4, title: "Card 4", label: "Read More" }
];

const CardSection = () => {
  return (
    <div className="card-section">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="card-image-wrapper">
            <img src={card.image} alt={card.title} className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <button className="card-label">
              {card.label}
              <span className="card-icon">➔</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
