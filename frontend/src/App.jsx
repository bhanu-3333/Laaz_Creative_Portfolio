import React from 'react';
import Home from './pages/Home/Home';
import GrowthSection from './components/GrowthSection/GrowthSection';
import ApproachSection from './components/ApproachSection/ApproachSection';
import ScrollingBanner from './components/ScrollingBanner/ScrollingBanner';
import ServicesSection from './components/ServicesSection/ServicesSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import DistinctiveSection from './components/DistinctiveSection/DistinctiveSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <GrowthSection />
      <ApproachSection />
      <ScrollingBanner />
      <ServicesSection />
      <PortfolioSection />
      <DistinctiveSection />
      <Footer />
    </div>
  );
}

export default App;
