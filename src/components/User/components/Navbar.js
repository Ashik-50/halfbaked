import React from 'react';
import logo from './addons/image.png';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>CARESPHERE</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Login</a></li>
        <li><a href="#about">Doctors</a></li>
        <li><a href="#services">Appointments</a></li>
        <li><a href="#contact">About</a></li>
        <li><a href="#contact"className="emergency-btn">Emergency</a></li>
        <li><a href="#account">Account</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;