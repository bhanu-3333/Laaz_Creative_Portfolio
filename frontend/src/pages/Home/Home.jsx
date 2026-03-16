import React from 'react';
import './Home.css';
import FloatingImages from '../../components/Animations/FloatingImages';
import logo from '../../assets/logo.png';
import arrowIcon from '../../assets/arrow.png';

// Import images
import img1 from '../../assets/images/image 1 .png';
import img2 from '../../assets/images/image 2.png';
import img3 from '../../assets/images/image 3.png';
import img4 from '../../assets/images/image 4.png';
import img5 from '../../assets/images/image 5.png';
import img6 from '../../assets/images/image 6.png';
import img7 from '../../assets/images/image 7.png';
import img8 from '../../assets/images/image 8.png';

const portfolioImages = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  img2, img4, img6, img8, img1, img3, img5, img7 // Shuffled second set
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section-wrapper">
        <div className="hero-container">
          <div className="hero-content">
            <div className="logo-wrapper">
              <img src={logo} alt="Laaz Creative Logo" className="logo-image" />
            </div>
            
            <div className="button-wrapper">
              <button className="contact-button">
                Contact us <img src={arrowIcon} alt="arrow" className="button-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="animation-section-wrapper">
        <FloatingImages images={portfolioImages} />
      </section>
    </div>
  );
};

export default Home;
