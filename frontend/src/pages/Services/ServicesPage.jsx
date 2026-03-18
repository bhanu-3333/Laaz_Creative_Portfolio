import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import GrowthSection from '../../components/GrowthSection/GrowthSection';
import DetailedServices from '../../components/DetailedServices/DetailedServices';
import Footer from '../../components/Footer/Footer';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page-wrapper">
      <Navbar />
      <main className="services-page-content">
        <GrowthSection />
        <DetailedServices />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
