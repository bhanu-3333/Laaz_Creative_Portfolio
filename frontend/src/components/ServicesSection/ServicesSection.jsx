import React, { useState } from 'react';
import ServiceHoverPreview from '../services/ServiceHoverPreview';
import './ServicesSection.css';

// Import service images from existing images folder
import mobileImg from '../../assets/images/image 1 .png';
import brandImg from '../../assets/images/image 2.png';
import studentsImg from '../../assets/images/image 3.png';
import webImg from '../../assets/images/image 4.png';
import arrowIcon from '../../assets/arrow.png';

const servicesList = [
  { id: 1, title: 'MOBILE APPLICATION', image: mobileImg },
  { id: 2, title: 'BRAND IDENTITY', image: brandImg },
  { id: 3, title: 'STUDENTS PROJECTS', image: studentsImg },
  { id: 4, title: 'WEB APPLICATION', image: webImg },
];

const ServicesSection = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="services-section">
      <ServiceHoverPreview image={hoveredImage} isVisible={isHovered} />
      
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-heading">
            Our <span className="highlight">Services</span>
          </h2>
          <h3 className="services-subtitle">
            Why is digital marketing important for my business?
          </h3>
          <p className="services-paragraph">
            In today's marketplace, customers expect more from the brands they engage with. Beyond products and services, they crave a deeper, more connected experience.
          </p>
        </div>

        <div className="services-grid-list">
          {/* Left Column */}
          <div className="services-column">
            {servicesList.map((service) => (
              <div 
                key={`${service.id}-left`} 
                className="service-item"
                onMouseEnter={() => handleMouseEnter(service.image)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="service-title">{service.title}</span>
              </div>
            ))}
          </div>

          {/* Right Column (Repeated as per design) */}
          <div className="services-column">
            {servicesList.map((service) => (
              <div 
                key={`${service.id}-right`} 
                className="service-item"
                onMouseEnter={() => handleMouseEnter(service.image)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="service-title">{service.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="services-footer">
          <button className="explore-button">
            Explore our services
            <img src={arrowIcon} alt="Arrow" className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
