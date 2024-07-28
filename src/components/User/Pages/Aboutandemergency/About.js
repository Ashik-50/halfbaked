import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/image.png';

const About = () => {
  return (
    <div>
      <nav style={{
  backgroundColor: 'black',
  padding: '0.5rem 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
}}>
  <div style={{
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    display: 'flex',
    alignItems: 'center'
  }}>
    <img src={logo} alt="Logo" style={{
      width: '30px',
      height: '30px',
      marginRight: '8px'
    }} />
    <span>CARESPHERE</span>
  </div>
  <ul style={{
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    borderBottom: 'none',
    border: 'none',
    textDecoration: 'none'
  }}>
    <li style={{ marginRight: '20px' }}><Link to="/" style={{
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.2s ease',
      borderBottom: 'none'
    }}>Home</Link></li>
    <li style={{ marginRight: '20px' }}><Link to="/doctors" style={{
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.2s ease',
      borderBottom: 'none'
    }}>Doctors</Link></li>
    <li style={{ marginRight: '20px' }}><Link to="/appointments" style={{
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.2s ease',
      borderBottom: 'none'
    }}>Appointments</Link></li>
    <li style={{ marginRight: '20px' }}><Link to="/about" style={{
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.2s ease',
      borderBottom: 'none'
    }}>About</Link></li>
    <li><Link to="/emergency" style={{
      backgroundColor: '#ff0000',
      color: '#fff',
      padding: '8px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
      border: 'none'
    }}>Emergency</Link></li>
    <li><Link to="/login" style={{
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.2s ease',
      borderBottom: 'none'
    }}>Login</Link></li>
  </ul>
</nav>
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
    </div>
  );
};

export default About;