import React from 'react';
import { Link } from 'react-router-dom';
import './DistinctiveSection.css';
import arrowIcon from '../../assets/arrow.png';
import brandImage from '../../assets/images/image 7.png'; // Using image 7 from the approved list

const DistinctiveSection = () => {
  return (
    <section className="distinctive-section">
      <div className="distinctive-container">
        {/* Left Side - Content */}
        <div className="distinctive-content">
          <h1 className="distinctive-heading">
            THE BEST <br />
            BRANDS ARE <br />
            <span className="distinctive-accent">Distinctived</span>
          </h1>
          
          <p className="distinctive-description">
            In today's marketplace, customers expect more from the brands they engage with. 
            Beyond products and services, they crave a deeper, more connected experience.
          </p>
          
          <Link to="/enquire" className="distinctive-btn">
            Enquire Now <img src={arrowIcon} alt="arrow" className="btn-arrow" />
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="distinctive-image-wrapper">
          <img src={brandImage} alt="Best Brands" className="distinctive-img" />
        </div>
      </div>
    </section>
  );
};

export default DistinctiveSection;
