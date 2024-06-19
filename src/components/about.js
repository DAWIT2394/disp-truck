import React from 'react';
import '../components/styles/about.css';  // Make sure to create and style this CSS file
import truckImage from '../images/slider8.jpg';  // Ensure the image is in the right path
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Us</h2>
        <h3>Truck Dispatch Services:</h3>
        <p>
          Exact dispatcher LLC is a <strong>“Full Service”</strong> truck dispatching company that handles all of the back-office work so you can compete with the large fleets. Typically, a large carrier would hire somebody to handle all of these tasks, but it is unaffordable for a small carrier, that’s where Exact dispatcher LLC comes in to help!
        </p>
        <ul>
          <li><i className="fas fa-check-circle"></i> Best Truck Dispatch <strong>Company On Your Side</strong></li>
          <li><i className="fas fa-check-circle"></i> You Pick The Areas <strong>You Want To Drive</strong></li>
          <li><i className="fas fa-check-circle"></i> We Handle <strong>All Your Broker Setup Packets</strong></li>
          <li><i className="fas fa-check-circle"></i> We Negotiate Hard <strong>For Best Paying Rates</strong></li>
          <li><i className="fas fa-check-circle"></i> We Talk To <strong>Brokers</strong></li>
        </ul>
      </div>
      <div className="about-us-image">
        <img src={truckImage} alt="Trucks" />
      </div>
    </div>
  );
};

export default AboutUs;
