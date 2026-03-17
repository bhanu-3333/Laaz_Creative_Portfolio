import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './PortfolioPage.css';

// Import images
import img1 from '../../assets/images/image 1 .png';
import img2 from '../../assets/images/image 2.png';
import img3 from '../../assets/images/image 3.png';
import img4 from '../../assets/images/image 4.png';
import img5 from '../../assets/images/image 5.png';
import img6 from '../../assets/images/image 6.png';
import img7 from '../../assets/images/image 7.png';
import img8 from '../../assets/images/image 8.png';

const portfolioData = [
  { id: 1, title: "MoMu Mobile application", category: "Mobile Application", image: img1, column: 1, size: "small" },
  { id: 2, title: "Vegan Mobile application", category: "Mobile Application", image: img2, column: 2, size: "large" },
  { id: 3, title: "Interior decor, landing page", category: "Web Design", image: img3, column: 3, size: "small" },
  { id: 4, title: "M.Furno, Design", category: "Web Application", image: img4, column: 1, size: "medium" },
  { id: 5, title: "Zuzo, Portfolio", category: "E-commerce Design", image: img5, column: 2, size: "wide" },
  { id: 6, title: "PIPIZO, Portfolio", category: "E-commerce Design", image: img6, column: 3, size: "medium" },
  { id: 7, title: "Zuzo, Portfolio", category: "E-commerce Design", image: img7, column: 2, size: "large" },
  { id: 8, title: "M.Furno, Design", category: "Web Application", image: img8, column: 1, size: "small" },
  { id: 9, title: "PIPIZO, Portfolio", category: "E-commerce Design", image: img3, column: 3, size: "small" },
];

const PortfolioPage = () => {
  const [offset, setOffset] = useState(0);
  const mainRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      
      const rect = mainRef.current.getBoundingClientRect();
      const scrolled = -rect.top;

      if (scrolled >= 0) {
        // Single text layer that "descends" through the grid
        // Cap adjusted for 300px gaps to stop at the third gap
        setOffset(Math.min(scrolled * 1.2, 1600)); 
      } else {
        setOffset(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-page-wrapper">
      <Navbar />
      
      <main className="portfolio-main" ref={mainRef}>
        {/* Single Parallax Background Text Layer */}
        <div className="parallax-text-container">
          <div 
            className="parallax-text port"
            style={{ transform: `translateY(${offset}px)` }}
          >
            PORT
          </div>
          <div 
            className="parallax-text folio"
            style={{ transform: `translateY(${offset}px)` }}
          >
            FOLIO
          </div>
        </div>

        <div className="portfolio-grid-container">
          {/* Column 1 */}
          <div className="portfolio-col col-1">
            {portfolioData.filter(item => item.column === 1).map(item => (
              <div key={item.id} className={`portfolio-card ${item.size}`}>
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="portfolio-col col-2">
            {portfolioData.filter(item => item.column === 2).map(item => (
              <div key={item.id} className={`portfolio-card ${item.size}`}>
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="portfolio-col col-3">
            {portfolioData.filter(item => item.column === 3).map(item => (
              <div key={item.id} className={`portfolio-card ${item.size}`}>
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
