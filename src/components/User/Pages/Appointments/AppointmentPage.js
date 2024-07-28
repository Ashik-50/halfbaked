// src/components/AppointmentPage.js
import React, { useState, useEffect } from 'react';
import AppointmentList from './AppointmentList';
import backgroundImage from '../../Assets/image.png'; // Update with the correct path
import { Link } from 'react-router-dom';
import logo from '../../Assets/image.png';

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const data = [
        {
          patientName: 'John Doe',
          appointmentDate: '2024-08-01',
          appointmentTime: '09:00 AM',
          doctorName: 'Dr. Smith',
          appointmentType: 'Check-up',
          notes: 'Patient has been experiencing symptoms of fever and headache.',
        },
        {
          patientName: 'Jane Doe',
          appointmentDate: '2024-08-02',
          appointmentTime: '10:30 AM',
          doctorName: 'Dr. Brown',
          appointmentType: 'Follow-up',
          notes: 'Patient has been experiencing symptoms of dizziness and nausea.',
        },
        {
          patientName: 'Jane Doe',
          appointmentDate: '2024-08-03',
          appointmentTime: '11:45 AM',
          doctorName: 'Dr. Lee',
          appointmentType: 'Surgery',
          notes: 'Patient has been scheduled for surgery to remove a tumor.',
        },
        // Add more appointments as needed
      ];
      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  const handleDelete = (index) => {
    setAppointments((prevAppointments) => prevAppointments.filter((_, i) => i !== index));
  };

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
      <div
        className="appointment-page"
        style={{
          padding: '100px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', 
          color: '#333', 
        }}
      >
        <h1
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          My Appointments
        </h1>
        <AppointmentList appointments={appointments} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default AppointmentPage;