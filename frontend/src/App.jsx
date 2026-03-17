import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import EnquirePage from './pages/Enquire/EnquirePage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/enquire" element={<EnquirePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
