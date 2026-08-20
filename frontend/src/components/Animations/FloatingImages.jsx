import React from 'react';
import './FloatingImages.css';

const FloatingImages = ({ images }) => {
  const renderImageGroup = (colIndex, shift) => {
    const shiftedImages = [...images.slice(shift), ...images.slice(0, shift)];
    
    return (
      <div className="image-group">
        {shiftedImages.map((src, index) => {
          const rotation = ((index * 9 + colIndex * 13) % 12) - 6; 
          const shiftX = ((index * 11 + colIndex * 17) % 20) - 10; 
          
          return (
            <div 
              key={index} 
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
  };

  const renderColumn = (colIndex, shift) => (
    <div className={`scroll-column col-${colIndex + 1}`}>
      <div className="scroll-track">
        {renderImageGroup(colIndex, shift)}
        {renderImageGroup(colIndex, shift)}
      </div>
    </div>
  );

  return (
    <div className="floating-container">
      <div className="floating-grid">
        {renderColumn(0, 0)}
        {renderColumn(1, 4)}
        {renderColumn(2, 8)}
      </div>
    </div>
  );
};

export default FloatingImages;

