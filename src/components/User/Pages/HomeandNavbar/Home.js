import React from 'react';
import video from '../../Assets/video2.mp4';
import './home.css'
import logo from '../../Assets/image.png';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="home-page">
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