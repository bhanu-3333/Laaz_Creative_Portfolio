import React from 'react';
import { Link } from 'react-router-dom';
import CardStackAnimation from '../Animations/CardStackAnimation';
import './ApproachSection.css';

// Import images for the card stack
import img1 from '../../assets/images/image 1 .png';
import img2 from '../../assets/images/image 2.png';
import img3 from '../../assets/images/image 3.png';
import img4 from '../../assets/images/image 4.png';
import arrowIcon from '../../assets/arrow.png';

const ApproachSection = () => {
  const approachImages = [img1, img2, img3, img4];

  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* LEFT SIDE - Animated Card Stack */}
        <div className="approach-left">
          <CardStackAnimation images={approachImages} interval={4000} />
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="approach-right">
          <h2 className="approach-heading">
            Our <span className="highlight">Approach</span>
          </h2>
          
          <div className="approach-content">
            <p className="description-semibold">
              We combine strategy with creativity to deliver exceptional results that elevate your brand and engage your audience.
            </p>
            <p className="description-regular">
              Our process is collaborative and data-driven, ensuring every design decision serves a purpose and contributes specifically to your business growth. We don't just create; we build futures.
            </p>
          </div>

          <Link to="/enquire" className="enquire-button">
            Enquire Now
            <img src={arrowIcon} alt="Arrow" className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
