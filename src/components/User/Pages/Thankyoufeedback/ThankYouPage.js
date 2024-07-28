import React from 'react';
import './ThankYouPage.css'; // Import custom styles
import { Link } from 'react-router-dom';
import logo from '../../Assets/image.png'; // Adjust the path as necessary

const ThankYou = ({ onBackToHome, onFeedback }) => {
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
      <div className="thank-you-container">
        <div className="thank-you-card">
          <div className="thank-you-header">
            <h1>Appointment Confirmation</h1>
            <p>
              Your appointment has been successfully booked. Below are the details:
            </p>
          </div>

          {/* Appointment Details Section */}
          <div className="appointment-details">
            <div className="appointment-info">
              <p style={{ textAlign: 'left' }}>
                <strong>Doctor's Name:</strong> Dr. John Smith
              </p>
              <p style={{ textAlign: 'left' }}>
                <strong>Date:</strong> 2023-03-15
              </p>
              <p style={{ textAlign: 'left' }}>
                <strong>Time:</strong> 10:00 AM
              </p>
            </div>
          </div>

          {/* Location and Contact Information */}
          <div className="location-contact">
            <h3>Clinic Information</h3>
            <div className="location-info">
              <p><strong>Clinic Address:</strong> 456 Wellness Ave, Health City, HC 78910</p>
              <p><strong>Phone:</strong> (987) 654-3210</p>
              <p><strong>Email:</strong> support@clinicname.com</p>
            </div>
          </div>

          <div className="buttons">
            <Link to="/">
              <button onClick={onBackToHome} className="back-home-btn">
                Back to Home
              </button>
            </Link>
            <Link to="/feedback">
              <button onClick={onFeedback} className="feedback-btn">
                Provide Feedback
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;