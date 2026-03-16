import React from 'react';
import './FloatingImages.css';

/**
 * FloatingImages - Implements a true seamless infinite loop by duplicating 
 * the entire image track and animating the parent container.
 */
const FloatingImages = ({ images }) => {
  
  // Renders a single group of images with deterministic styles
  const renderImageGroup = (colIndex, shift) => {
    // Create a unique order for this column by shifting the base array
    const shiftedImages = [...images.slice(shift), ...images.slice(0, shift)];
    
    return (
      <div className="image-group">
        {shiftedImages.map((src, index) => {
          // Deterministic styles based on index to ensure consistency between groups in the same column
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
        {/* Strictly two identical groups for seamless infinite looping */}
        {renderImageGroup(colIndex, shift)}
        {renderImageGroup(colIndex, shift)}
      </div>
    </div>
  );

  return (
    <div className="floating-container">
      <div className="floating-grid">
        {renderColumn(0, 0)}
        {renderColumn(1, 4)} {/* Staggered start positions for variety */}
        {renderColumn(2, 8)} 
      </div>
    </div>
  );
};

export default FloatingImages;
