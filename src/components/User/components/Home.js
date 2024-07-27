import React from 'react';
import video from '../addons/video2.mp4';
import './home.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay">
          <h1 className="heading">CARESPHERE</h1>
          <p className="paragraph">
          DIGITAL HEALTH PLATFORM DESIGNED TO ENHANCE PATIENT CARE THROUGH INTEGRATED TECHNOLOGY SOLUTIONS
          </p>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;