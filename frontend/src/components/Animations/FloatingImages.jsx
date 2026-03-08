import React from 'react';
import './FloatingImages.css';

const FloatingImages = ({ images }) => {
  // Ensure we have enough copies for a seamless floating loop
  const col1 = [...images, ...images];
  const col2 = [...images, ...images];
  const col3 = [...images, ...images];

  const renderColumn = (columnImages, colIndex) => (
    <div className={`floating-column col-${colIndex + 1}`}>
      {columnImages.map((src, index) => {
        // Deterministic but organic-feeling rotation and horizontal jitter
        const rotation = ((index * 9 + colIndex * 13) % 12) - 6; 
        const shiftX = ((index * 11 + colIndex * 17) % 20) - 10; 
        
        return (
          <div 
            key={`${colIndex}-${index}`} 
            className="floating-image-wrapper"
            style={{ 
              '--rotation': `${rotation}deg`,
              '--shiftX': `${shiftX}px`,
            }}
          >
            <img src={src} alt="Portfolio" className="floating-img" />
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="floating-container">
      <div className="floating-grid">
        {renderColumn(col1, 0)}
        {renderColumn(col2, 1)}
        {renderColumn(col3, 2)}
      </div>
    </div>
  );
};

export default FloatingImages;
