import React from 'react';
import Home from './pages/Home/Home';
import GrowthSection from './components/GrowthSection/GrowthSection';
import ApproachSection from './components/ApproachSection/ApproachSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <GrowthSection />
      <ApproachSection />
    </div>
  );
}

export default App;
