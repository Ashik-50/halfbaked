import React, { useState, useEffect } from 'react';
import './Patients.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // fetch all patients from API or database
    const fetchedPatients = [
      { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', phone: '1234567890', illness: 'Heart Problem', appointmentDate: '2022-01-01', doctor: 'Dr. Smith' },
      { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@example.com', phone: '0987654321', illness: 'Heart Problem', appointmentDate: '2022-01-02', doctor: 'Dr. Johnson' },
      { id: 3, firstName: 'Bob', lastName: 'Smith', email: 'bobsmith@example.com', phone: '1112223333', illness: 'Heart Problem', appointmentDate: '2022-01-03', doctor: 'Dr. Lee' },
      { id: 4, firstName: 'Alice', lastName: 'Johnson', email: 'alicejohnson@example.com', phone: '4445556666', illness: 'Heart Problem', appointmentDate: '2022-01-04', doctor: 'Dr. Brown' },
      { id: 5, firstName: 'Mike', lastName: 'Davis', email: 'ikedavis@example.com', phone: '7778889999', illness: 'Heart Problem', appointmentDate: '2022-01-05', doctor: 'Dr. Taylor' },
      { id: 6, firstName: 'Emily', lastName: 'Williams', email: 'emilywilliams@example.com', phone: '9990001111', illness: 'Heart Problem', appointmentDate: '2022-01-06', doctor: 'Dr. Hall' },
      { id: 7, firstName: 'Sarah', lastName: 'Jones', email: 'arahjones@example.com', phone: '2223334444', illness: 'Heart Problem', appointmentDate: '2022-01-07', doctor: 'Dr. Martin' },
      { id: 8, firstName: 'Kevin', lastName: 'White', email: 'kevinwhite@example.com', phone: '5556667777', illness: 'Heart Problem', appointmentDate: '2022-01-08', doctor: 'Dr. Thompson' },
      { id: 9, firstName: 'Lisa', lastName: 'Harris', email: 'lisaharris@example.com', phone: '8889990000', illness: 'Heart Problem', appointmentDate: '2022-01-09', doctor: 'Dr. Lewis' },
      { id: 10, firstName: 'David', lastName: 'Walker', email: 'davidwalker@example.com', phone: '1112223333', illness: 'Heart Problem', appointmentDate: '2022-01-10', doctor: 'Dr. Robinson' },
      { id: 11, firstName: 'Rachel', lastName: 'Davis', email: 'racheldavis@example.com', phone: '4445556666', illness: 'Heart Problem', appointmentDate: '2022-01-11', doctor: 'Dr. Davis' },
      { id: 12, firstName: 'Chris', lastName: 'Miller', email: 'chrismiller@example.com', phone: '7778889999', illness: 'Heart Problem', appointmentDate: '2022-01-12', doctor: 'Dr. Miller' },
      { id: 13, firstName: 'Jessica', lastName: 'Brown', email: 'jessicabrown@example.com', phone: '9990001111', illness: 'Heart Problem', appointmentDate: '2022-01-13', doctor: 'Dr. Brown' },
      { id: 14, firstName: 'Matthew', lastName: 'Taylor', email: 'atthewtaylor@example.com', phone: '2223334444', illness: 'Heart Problem', appointmentDate: '2022-01-14', doctor: 'Dr. Taylor' },
      { id: 15, firstName: 'Olivia', lastName: 'Hall', email: 'oliviahall@example.com', phone: '5556667777', illness: 'Heart Problem', appointmentDate: '2022-01-15', doctor: 'Dr. Hall' },
    ];
    setPatients(fetchedPatients);
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
        <Link to="/doctor/home" style={{ color: '#fff', textDecoration: 'none' }}>
          Dashboard
        </Link>
      </li>
      <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
        <Link to="/doctor/pat" style={{ color: '#fff', textDecoration: 'none' }}>
          Patients
        </Link>
      </li>
      <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
        <Link to="/doctor/app" style={{ color: '#fff', textDecoration: 'none' }}>
          Appointments
        </Link>
      </li>
      <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
        <Link to="/doctor/his" style={{ color: '#fff', textDecoration: 'none' }}>
          Consultation History
        </Link>
      </li>
      <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
        <Link to="/doctor/logout" style={{ color: '#fff', textDecoration: 'none' }}>
          Logout
        </Link>
      </li>
    </ul>
      </div>
      <div className="main-content" style={{ marginLeft: 200, padding: 50 }}>
        <div className="header">
          <h1>Patients</h1>
        </div>
        <div className="content">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ padding: 10, border: '1px solid #ddd' }}>ID</th>
                <th style={{ padding: 10, border: '1px solid #ddd' }}>First Name</th>
                <th style={{ padding: 10, border: '1px solid #ddd' }}>Last Name</th>
                <th style={{ padding: 10, border: '1px solid #ddd' }}>Email</th>
                <th style={{ padding: 10, border: '1px solid #ddd' }}>Phone</th>
                <th style={{ padding: 10, border: '1px solid #ddd' }}>Illness</th>
                <th style={{ padding: 10, border: '1px solid #ddd' }}>Appointment Date</th>
                <th style={{ padding: 10, border: '1px solid #ddd' }}>Doctor</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td style={{ padding: 10, border: '1px solid #ddd' }}>{patient.id}</td>
                  <td style={{ padding: 10, border: '1px solid #ddd' }}>{patient.firstName}</td>
                  <td style={{ padding: 10, border: '1px solid #ddd' }}>{patient.lastName}</td>
                  <td style={{ padding: 10, border: '1px solid #ddd' }}>{patient.email}</td>
                  <td style={{ padding: 10, border: '1px solid #ddd' }}>{patient.phone}</td>
                  <td style={{ padding: 10, border: '1px solid #ddd' }}>{patient.illness}</td>
                  <td style={{ padding: 10, border: '1px solid #ddd' }}>{patient.appointmentDate}</td>
                  <td style={{ padding: 10, border: '1px solid #ddd' }}>{patient.doctor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Patients;