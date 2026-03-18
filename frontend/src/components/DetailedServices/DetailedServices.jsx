import React from 'react';
import { Link } from 'react-router-dom';
import './DetailedServices.css';
import arrowIcon from '../../assets/arrow.png';

// Import images for services
import img1 from '../../assets/images/image 1 .png';
import img2 from '../../assets/images/image 2.png';
import img3 from '../../assets/images/image 3.png';
import img4 from '../../assets/images/image 4.png';
import img5 from '../../assets/images/image 5.png';
import img6 from '../../assets/images/image 6.png';
import img7 from '../../assets/images/image 7.png';
import img8 from '../../assets/images/image 8.png';

const DetailedServices = () => {
  const serviceDetails = [
    {
      title: "E-Commerce,\nWeb\nApplication",
      price: "1999",
      description: "Saint Aya is a modern ritual brand centred on presence, balance, and a return to self. From inception, the client set out to translate ancient ritual into a contemporary lifestyle context, balancing spirituality with contemporary sensibility and moving beyond traditional wellness aesthetics. The challenge was to express emotional and spiritual nuance through a refined visual language that felt grounded, culturally relevant, and confident in its restraint. We shaped an identity that feels intentional and considered, using design and storytelling to invite pause while remaining clear, modern, and approachable.",
      images: [img1, img2],
      reverse: false
    },
    {
      title: "Web Application,\nDesign",
      price: "999",
      description: "Our web development approach focuses on seamless user experiences and high-performance applications. We bridge the gap between complex functionality and intuitive design, ensuring that your brand remains accessible and engaging on every device. From strategy to deployment, we prioritize scalability and robust architecture to support your long-term growth.",
      images: [img3, img4],
      reverse: true
    },
    {
      title: "Mobile\nApplication",
      price: "2999",
      description: "Designing a brand identity is about finding the core essence of your business and translating it into a visual language. We create cohesive systems that communicate your values and resonate with your target audience. Our process involves deep research, conceptual exploration, and meticulous refinement to ensure your brand stands out in a crowded marketplace.",
      images: [img5, img6],
      reverse: false
    }
  ];

  return (
    <section className="detailed-services">
      <div className="offer-header">
        <h2 className="offer-title">What we Offer</h2>
        <h3 className="offer-subtitle">Why is digital marketing important for my business?</h3>
        <p className="offer-description">
          In today's marketplace, customers expect more from the brands they engage with. Beyond products and services, they crave a deeper, more connected experience. In today's marketplace, customers expect more from the brands they engage with.
        </p>
        <div className="offer-btn-wrapper">
          <Link to="/portfolio" className="explore-portfolio-btn">
            Explore our portfolio <img src={arrowIcon} alt="arrow" className="btn-arrow" />
          </Link>
        </div>
      </div>

      <div className="services-details-list">
        {serviceDetails.map((service, index) => (
          <div key={index} className="detail-item">
            <div className={`detail-top-content ${service.reverse ? 'reverse' : ''}`}>
              <div className="detail-text-column">
                <h2 className="detail-heading">{service.title}</h2>
                <div className="price-badge">
                  Starts at ₹{service.price}
                </div>
              </div>
              <div className="detail-images-column">
                <div className="stacked-offset-images">
                  {service.images.map((img, i) => (
                    <div key={i} className={`offset-img-wrapper img-${i + 1}`}>
                      <img src={img} alt={`${service.title} ${i + 1}`} className="offset-img" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="detail-bottom-content">
              <p className="detail-description">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedServices;
