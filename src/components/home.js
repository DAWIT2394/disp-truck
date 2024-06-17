import React from 'react';
import './styles/home.css'
import hometruck from '../images/slider1.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
  return (
    <div className="container">
      <header className="header">
      <div className="contact-info">
          <span><i className="fas fa-phone-alt"></i> +1 (302) 204-8440</span>
          <span><i className="fas fa-envelope"></i> info@exact-dispatcher.com</span>
          <span><i className="fas fa-map-marker-alt"></i> 561, 1007 N Orange St. 4th Floor, Wilmington, DE, New Castle, US, 19801</span>
        </div>
        </header>
        <div className='nav-cont'>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Us</a>
          <button className="get-in-touch">Get in Touch</button>
        </nav>
        </div>
        
    
      <main className="main">
        <div className="image-container">
          <img src={hometruck} alt="Truck Dispatch Services" />
          <div className="overlay">
            <h1>Truck Dispatch Services</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
