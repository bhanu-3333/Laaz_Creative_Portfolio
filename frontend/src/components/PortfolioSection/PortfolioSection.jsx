import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PortfolioSection.css';
import arrowIcon from '../../assets/arrow.png';

import img1 from '../../assets/images/image 1 .png';
import img2 from '../../assets/images/image 2.png';
import img3 from '../../assets/images/image 3.png';
import img4 from '../../assets/images/image 4.png';
import img5 from '../../assets/images/image 5.png';
import img6 from '../../assets/images/image 6.png';

const portfolioData = [
  {
    id: 1,
    title: "MoMu Moblie application",
    category: "Mobile Application",
    image: img1,
    size: "small",
    column: 1
  },
  {
    id: 4,
    title: "M.Furno, Design",
    category: "Web Application",
    image: img4,
    size: "medium",
    column: 1
  },
  {
    id: 2,
    title: "Vegan Moblie application",
    category: "Mobile Application",
    image: img2,
    size: "large",
    column: 2
  },
  {
    id: 5,
    title: "Zuzo, Portfolio",
    category: "E-commerce Design",
    image: img5,
    size: "wide",
    column: 2
  },
  {
    id: 3,
    title: "Interior decor, landing page",
    category: "Web Design",
    image: img3,
    size: "small",
    column: 3
  },
  {
    id: 6,
    title: "PIPIZO, Portfolio",
    category: "E-commerce Design",
    image: img6,
    size: "medium",
    column: 3
  }
];

const PortfolioSection = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = React.useState(0);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;

      if (sectionTop <= 0) {
        const scrolledIntoSection = -sectionTop;
        const movement = scrolledIntoSection * 1.0;
        setOffset(Math.min(movement, 800));
      } else {
        setOffset(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="portfolio-section" ref={sectionRef}>
      <div className="portfolio-container">
        <div className="portfolio-heading-wrapper">
          <div 
            className="heading-part port" 
            style={{ transform: `translateY(${offset}px)` }}
          >
            PORT
          </div>
          <div 
            className="heading-part folio" 
            style={{ transform: `translateY(${offset}px)` }}
          >
            FOLIO
          </div>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-column col-1">
            {portfolioData.filter(item => item.column === 1).map(item => (
              <div key={item.id} className={`portfolio-item ${item.size}`}>
                <div className="portfolio-image-container">
                  <img src={item.image} alt={item.title} className="portfolio-image" />
                </div>
                <div className="portfolio-info">
                  <h3 className="portfolio-item-title">{item.title}</h3>
                  <p className="portfolio-item-category">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-column col-2">
            {portfolioData.filter(item => item.column === 2).map(item => (
              <div key={item.id} className={`portfolio-item ${item.size}`}>
                <div className="portfolio-image-container">
                  <img src={item.image} alt={item.title} className="portfolio-image" />
                </div>
                <div className="portfolio-info">
                  <h3 className="portfolio-item-title">{item.title}</h3>
                  <p className="portfolio-item-category">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-column col-3">
            {portfolioData.filter(item => item.column === 3).map(item => (
              <div key={item.id} className={`portfolio-item ${item.size}`}>
                <div className="portfolio-image-container">
                  <img src={item.image} alt={item.title} className="portfolio-image" />
                </div>
                <div className="portfolio-info">
                  <h3 className="portfolio-item-title">{item.title}</h3>
                  <p className="portfolio-item-category">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-footer">
          <button className="portfolio-btn" onClick={() => navigate('/portfolio')}>
            Our Portfolio <img src={arrowIcon} alt="arrow" className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

