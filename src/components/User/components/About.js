import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">Welcome to CareSphere</h1>
        <p className="about-subtitle">Your trusted healthcare companion</p>
      </div>
      <div className="about-content">
        <p className="about-description">
          CareSphere is a comprehensive healthcare app designed to make medical care more accessible and convenient for everyone. Our mission is to provide a seamless experience for users to book appointments with doctors, find medical professionals based on their medical history, and access emergency services when needed.
        </p>
        <div className="about-features">
          <h2 className="about-features-title">Our Features</h2>
          <ul className="about-features-list">
            <li className="about-feature">
              <i className="fas fa-calendar-alt"></i>
              <div className="about-feature-content">
                <strong>Book Appointments</strong>
                <p>Easily schedule appointments with our network of doctors and medical professionals.</p>
              </div>
            </li>
            <li className="about-feature">
              <i className="fas fa-search"></i>
              <div className="about-feature-content">
                <strong>Find Doctors</strong>
                <p>Search for doctors based on your medical history and preferences.</p>
              </div>
            </li>
            <li className="about-feature">
              <i className="fas fa-ambulance"></i>
              <div className="about-feature-content">
                <strong>Emergency Services</strong>
                <p>Our emergency button allows pregnant ladies and aged persons to quickly call for ambulance services in case of an emergency.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="about-vision">
          <h2 className="about-vision-title">Our Vision</h2>
          <p className="about-vision-description">
            At CareSphere, we envision a future where healthcare is accessible, affordable, and convenient for everyone. We strive to make a positive impact on the lives of our users by providing them with the best possible medical care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;