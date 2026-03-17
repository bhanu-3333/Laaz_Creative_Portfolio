import React, { useState, useEffect } from 'react';
import './CardStackAnimation.css';

/**
 * CardStackAnimation - A reusable component that takes an array of images
 * and displays them in an auto-looping stack.
 * 
 * @param {Object} props
 * @param {string[]} props.images - Array of image source URLs
 * @param {number} [props.interval=3000] - Interval in ms between card swaps
 */
const CardStackAnimation = ({ images, interval = 3000 }) => {
  const [cards, setCards] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize cards with indices
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
    
    // After animation duration, move the first card to the end
    setTimeout(() => {
      setCards(prevCards => {
        const [first, ...rest] = prevCards;
        return [...rest, first];
      });
      setIsTransitioning(false);
    }, 900); // Sync with CSS transition time
  };

  return (
    <div className="card-stack-container">
      {cards.map((card, index) => {
        // We only really care about the top card, and its transition
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
