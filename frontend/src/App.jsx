import React from 'react';
import Home from './pages/Home/Home';
import GrowthSection from './components/GrowthSection/GrowthSection';
import ApproachSection from './components/ApproachSection/ApproachSection';
import ScrollingBanner from './components/ScrollingBanner/ScrollingBanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <GrowthSection />
      <ApproachSection />
      <ScrollingBanner />
    </div>
  );
}

export default App;
