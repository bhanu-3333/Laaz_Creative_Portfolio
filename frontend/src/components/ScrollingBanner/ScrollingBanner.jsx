import React from 'react';
import './ScrollingBanner.css';

// Import icons from assets
import sunWhite from '../../assets/images/sun_fill_white.png';
import sunBrown from '../../assets/images/sun_fill_brown.png';
import sunEmpty from '../../assets/images/sun_empty.png';
import sunFillEmpty from '../../assets/images/sun_fill_empty.png';

const ScrollingBanner = () => {
  const content = "GREEN THE PLANET";
  
  // Reusable content generator for infinite effect
  const renderBannerItems = (icons) => {
    return Array(12).fill(0).map((_, i) => {
      const currentIcon = icons[i % icons.length];
      return (
        <React.Fragment key={i}>
          <img src={currentIcon} alt="Sun Icon" className="banner-icon" />
          <span className="banner-text">{content}</span>
        </React.Fragment>
      );
    });
  };

  return (
    <section className="scrolling-banner-section">
      {/* TOP BANNER - Scrolls RIGHT */}
      <div className="banner-wrapper top-banner tilt-right">
        <div className="banner-track scroll-right">
          <div className="banner-group">
            {renderBannerItems([sunWhite, sunEmpty])}
          </div>
          <div className="banner-group">
            {renderBannerItems([sunWhite, sunEmpty])}
          </div>
        </div>
      </div>

      {/* BOTTOM BANNER - Scrolls LEFT */}
      <div className="banner-wrapper bottom-banner tilt-left">
        <div className="banner-track scroll-left">
          <div className="banner-group">
            {renderBannerItems([sunBrown, sunFillEmpty])}
          </div>
          <div className="banner-group">
            {renderBannerItems([sunBrown, sunFillEmpty])}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingBanner;
