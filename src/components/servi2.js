import React from 'react';
import '../components/styles/Services.css';  // Make sure to create and style this CSS file
import servicesImage from '../images/slider6.png';   // Ensure the image path is correct

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-content">
        <div className="service">
          <div className="icon">$</div>
          <h3>DISPATCHING</h3>
          <p>From 5% of gross</p>
        </div>
        <div className="service">
          <div className="icon">24x7</div>
          <h3>SUPPORT 24X7</h3>
          <p>From 5% of gross</p>
        </div>
        <div className="service">
          <div className="icon">%</div>
          <h3>RATE NEGOTIATION</h3>
          <p>From 5% of gross</p>
        </div>
        <div className="service">
          <div className="icon">📄</div>
          <h3>DOCUMENT MANAGEMENT & PAPERWORK</h3>
          <p>From 5% of gross</p>
        </div>
        <div className="service">
          <div className="icon">🎁</div>
          <h3>FACTORING SERVICE</h3>
          <p>From 5% of gross</p>
        </div>
        <div className="service">
          <div className="icon">📊</div>
          <h3>BILLING</h3>
          <p>From 5% of gross</p>
        </div>
      </div>
      {/* <img src={servicesImage} alt="Service person" className="services-image" /> */}
    </div>
  );
};

export default Services;
