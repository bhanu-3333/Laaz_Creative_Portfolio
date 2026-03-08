import React from 'react';
import './FloatingImages.css';

const FloatingImages = ({ images }) => {
  // Split images into 3 columns based on the request
  // Column 1 & 2: floating upward (many images)
  // Column 3: only 2 images
  
  const col1 = [...images.slice(0, images.length / 2), ...images.slice(0, images.length / 2)];
  const col2 = [...images.slice(images.length / 2), ...images.slice(images.length / 2)];
  const col3 = images.slice(0, 2); // Only 2 images for the 3rd column

  return (
    <div className="floating-container">
      <div className="floating-grid">
        {/* Column 1 */}
        <div className="floating-column col-animate">
          {col1.map((src, index) => (
            <div key={`col1-${index}`} className="floating-image-wrapper">
              <img src={src} alt="Portfolio" className="floating-img" />
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="floating-column col-animate">
          {col2.map((src, index) => (
            <div key={`col2-${index}`} className="floating-image-wrapper">
              <img src={src} alt="Portfolio" className="floating-img" />
            </div>
          ))}
        </div>

        {/* Column 3 - Static/Slower or just special arrangement */}
        <div className="floating-column col-special">
          {col3.map((src, index) => (
            <div key={`col3-${index}`} className="floating-image-wrapper">
              <img src={src} alt="Portfolio" className="floating-img" />
            </div>
          ))}
          <div className="empty-space"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImages;
