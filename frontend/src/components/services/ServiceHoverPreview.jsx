import React from 'react';
import './ServiceHoverPreview.css';

/**
 * ServiceHoverPreview - A reusable component that displays an image preview
 * at the top of the screen when a service is hovered.
 * 
 * @param {Object} props
 * @param {string} props.image - The image source URL
 * @param {boolean} props.isVisible - Whether the preview should be visible
 */
const ServiceHoverPreview = ({ image, isVisible, position }) => {
  const style = position ? {
    left: `${position.x}px`,
    top: `${position.y}px`
  } : {};

  return (
    <div 
      className={`service-hover-preview-container ${isVisible ? 'visible' : ''}`}
      style={style}
    >
      {image && <img src={image} alt="Service Preview" className="preview-image" />}
    </div>
  );
};

export default ServiceHoverPreview;
