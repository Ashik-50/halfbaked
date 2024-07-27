import React, { useState, useEffect } from 'react';
import './ConHis.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

const ConHis = () => {
  const [consultations, setConsultations] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedConsultation, setSelectedConsultation] = useState({});

  useEffect(() => {
    // fetch consultation history from API or database
    const fetchedConsultations = [
      {
        id: 1,
        doctorName: 'Dr. Smith',
        patientName: 'John Doe',
        consultationDate: '2022-01-01',
        consultationTime: '10:00 AM',
        illness: 'Heart Problem',
        diagnosis: 'High Blood Pressure',
        treatment: 'Medication',
      },
      {
        id: 2,
        doctorName: 'Dr. Johnson',
        patientName: 'Jane Doe',
        consultationDate: '2022-01-02',
        consultationTime: '11:00 AM',
        illness: 'Heart Problem',
        diagnosis: 'High Cholesterol',
        treatment: 'Lifestyle Changes',
      },
      {
        id: 3,
        doctorName: 'Dr. Lee',
        patientName: 'Bob Smith',
        consultationDate: '2022-01-03',
        consultationTime: '12:00 PM',
        illness: 'Heart Problem',
        diagnosis: 'Cardiovascular Disease',
        treatment: 'Surgery',
      },
      {
        id: 4,
        doctorName: 'Dr. Smith',
        patientName: 'Alice Johnson',
        consultationDate: '2022-01-04',
        consultationTime: '2:00 PM',
        illness: 'Heart Problem',
        diagnosis: 'High Blood Pressure',
        treatment: 'Medication',
      },
      {
        id: 5,
        doctorName: 'Dr. Johnson',
        patientName: 'Mike Lee',
        consultationDate: '2022-01-05',
        consultationTime: '3:00 PM',
        illness: 'Heart Problem',
        diagnosis: 'High Cholesterol',
        treatment: 'Lifestyle Changes',
      },
    ];
    setConsultations(fetchedConsultations);
  }, []);

  const handleViewDetails = (consultation) => {
    setSelectedConsultation(consultation);
    setShowDetails(true);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar" style={{ width: 250, backgroundColor: '#333', color: '#fff', padding: 0, position: 'fixed', top: 0, bottom: 0, left: 0 }}>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h2>CARESPHERE</h2>
        </div>
        <ul>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/docpat">Patients</Link>
      </li>
      <li>
        <Link to="/docapp">Appointments</Link>
      </li>
      <li>
        <Link to="/dochis">Consultation History</Link>
      </li>
      <li>
        <Link to="/doclogout">Logout</Link>
      </li>
    </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Consultation History</h1>
        </div>
        <div className="content">
          <div className="consultation-list">
            {consultations.map((consultation, index) => (
              <div className="consultation-card" key={index}>
                <h4>{consultation.doctorName}</h4>
                <p>Patient: {consultation.patientName}</p>
                <p>Date: {consultation.consultationDate}</p>
                <button onClick={() => handleViewDetails(consultation)}>View Details</button>
              </div>
            ))}
          </div>
          {showDetails && (
            <div className="consultation-details">
              <h2>Consultation Details</h2>
              <p>Doctor: {selectedConsultation.doctorName}</p>
              <p>Patient: {selectedConsultation.patientName}</p>
              <p>Date: {selectedConsultation.consultationDate}</p>
              <p>Time: {selectedConsultation.consultationTime}</p>
              <p>Illness: {selectedConsultation.illness}</p>
              <p>Diagnosis: {selectedConsultation.diagnosis}</p>
              <p>Treatment: {selectedConsultation.treatment}</p>
              <button onClick={() => setShowDetails(false)}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConHis;