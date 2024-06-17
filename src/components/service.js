import React from 'react';
import './styles/TruckingDispatchServices.css';  // Ensure this file has the updated CSS
import topTruckImage from '../images/slider5.png';  // Ensure the image path is correct
import bottomTruckImage from '../images/slider6.png';  // Ensure the image path is correct
import Services from '../components/servi2';

const TruckingDispatchServices = () => {
  return (
    <div className="trucking-dispatch-container">
      <div className="top-section">
        <img src={topTruckImage} alt="Trucks" className="top-image" />
      </div>
      <div className="content-section">
        <div className="logo">
          <img src={bottomTruckImage} alt="Exact Dispatcher LLC" />
        </div>
        <div className="text-content">
          <h2>TRUCKING DISPATCH SERVICES</h2>
          <p>
            Exact dispatcher - dispatch services arranges professional dispatch services for owner operators and truckers who are tired of wasting their time and energy on cheap freight. Trucks Dispatch Services provides the prospect of high paying loads while you drive. In addition, we can handle the rest of your administrative overhead such as negotiating rates and handling necessary paperwork.
          </p>
        </div>
      </div>
    <Services/>

    </div>
  );
};

export default TruckingDispatchServices;
