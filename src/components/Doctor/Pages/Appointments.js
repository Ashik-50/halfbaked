import React, { useState, useEffect } from 'react';
import './Appointments.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchedAppointments = [
      {
        id: 1,
        patientName: 'John Doe',
        doctorName: 'Dr. Smith',
        appointmentDate: '2022-01-01',
        appointmentTime: '10:00 AM',
        illness: 'Heart Problem',
      },
      {
        id: 2,
        patientName: 'Jane Doe',
        doctorName: 'Dr. Johnson',
        appointmentDate: '2022-01-02',
        appointmentTime: '11:00 AM',
        illness: 'Heart Problem',
      },
      {
        id: 3,
        patientName: 'Bob Smith',
        doctorName: 'Dr. Lee',
        appointmentDate: '2022-01-03',
        appointmentTime: '12:00 PM',
        illness: 'Heart Problem',
      },
      // add more appointments here
    ];
    setAppointments(fetchedAppointments);
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="sidebar" style={{ width: 250, backgroundColor: '#333', color: '#fff', padding: 0, position: 'fixed', top: 0, bottom: 0, left: 0 }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 20, paddingLeft: 5 }}>
          <img src={logo} alt="Logo" />
          <h2>CARESPHERE</h2>
        </div>
        <ul>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/doctor/home" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/doctor/pat" style={{ color: '#fff', textDecoration: 'none' }}>Patients</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/doctor/app" style={{ color: '#fff', textDecoration: 'none' }}>Appointments</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/doctor/his" style={{ color: '#fff', textDecoration: 'none' }}>Consultation History</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/doctor/logout" style={{ color: '#fff', textDecoration: 'none' }}>Logout</Link>
          </li>
        </ul>
      </div>
      <div className="main-content" style={{ marginLeft: 200, padding: 60 }}>
        <div className="header">
          <h1>Appointments</h1>
        </div>
        <div className="content">
          <h2>All Appointments:</h2>
          {appointments.map((appointment, index) => (
            <div
              className="appointment-card"
              key={index}
              style={{
                maxWidth: '800px', // set a maximum width
                margin: '20px auto', // center the card
                padding: 20,
                backgroundColor: '#fff',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 10,
                  borderBottom: '1px solid #ddd',
                }}
              >
                <h3>Appointment {appointment.id}</h3>
                <p style={{ fontSize: 16, color: '#666' }}>
                  {appointment.appointmentDate} {appointment.appointmentTime}
                </p>
              </div>
              <div
                style={{
                  padding: 20,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <p>
                    <strong>Patient Name:</strong> {appointment.patientName}
                  </p>
                  <p>
                    <strong>Doctor Name:</strong> {appointment.doctorName}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Illness:</strong> {appointment.illness}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
