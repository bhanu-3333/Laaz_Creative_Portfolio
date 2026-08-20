import React, { useState, useEffect } from 'react';
import './CardStackAnimation.css';

const CardStackAnimation = ({ images, interval = 3000 }) => {
  const [cards, setCards] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images && images.length > 0) {
      setCards(images.map((img, index) => ({ id: index, src: img })));
    }
  }, [images]);

  useEffect(() => {
    if (cards.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer);
  }, [cards, interval]);

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCards(prevCards => {
        const [first, ...rest] = prevCards;
        return [...rest, first];
      });
      setIsTransitioning(false);
    }, 900);
  };

  return (
    <div className="card-stack-container">
      {cards.map((card, index) => {
        const isTop = index === 0;
        
        return (
          <div
            key={card.id}
            className={`card-item card-${index} ${isTop && isTransitioning ? 'moving-to-back' : ''}`}
            style={{
              zIndex: cards.length - index,
            }}
          >
            <img src={card.src} alt={`Approach Card ${card.id}`} />
          </div>
        );
      })}
    </div>
  );
};

export default CardStackAnimation;

