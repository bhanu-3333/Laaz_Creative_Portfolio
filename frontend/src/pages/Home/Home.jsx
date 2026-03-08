import React from 'react';
import './Home.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import FloatingImages from '../../components/Animations/FloatingImages';

// Import images
import img1 from '../../assets/images/image 1 .png';
import img2 from '../../assets/images/image 2.png';
import img3 from '../../assets/images/image 3.png';
import img4 from '../../assets/images/image 4.png';
import img5 from '../../assets/images/image 5.png';
import img6 from '../../assets/images/image 6.png';
import img7 from '../../assets/images/image 7.png';
import img8 from '../../assets/images/image 8.png';

const portfolioImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section-wrapper">
        <HeroSection />
      </section>
      
      <section className="animation-section-wrapper">
        <FloatingImages images={portfolioImages} />
      </section>
    </div>
  );
};

export default Home;
