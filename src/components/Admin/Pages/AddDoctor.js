import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddDoctor.css';
import logo from '../Assets/logo.png';
const AddDoctor = () => {
  const [newDoctor, setNewDoctor] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialty: '',
    hospital: '',
  });

  const [doctors, setDoctors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDoctors([...doctors, newDoctor]);
    setNewDoctor({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialty: '',
      hospital: '',
    });
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar"style={{ width: 250, backgroundColor: '#333', color: '#fff', padding: 0, position: 'fixed', top: 0, bottom: 0, left: 0 }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 20, paddingLeft: 5 }}>
          <img src={logo} alt="Logo" />
          <h2>CARESPHERE</h2>
        </div>
        <ul>
          <li>
            <Link to="/adminhome">Dashboard</Link>
          </li>
          <li>
            <Link to="/admindoc">Doctors</Link>
          </li>
          <li>
            <Link to="/adminadd">Add Doctors</Link>
          </li>
          <li>
            <Link to="/adminuser">Users</Link>
          </li>
          <li>
            <Link to="/adminlogout">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Add Doctor</h1>
        </div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={newDoctor.firstName}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter first name"
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={newDoctor.lastName}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={newDoctor.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={newDoctor.phone}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter phone number"
              />
            </div>
            <div className="form-group">
              <label>Specialty:</label>
              <input
                type="text"
                name="specialty"
                value={newDoctor.specialty}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter specialty"
              />
            </div>
            <div className="form-group">
              <label>Hospital:</label>
              <input
                type="text"
                name="hospital"
                value={newDoctor.hospital}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter hospital"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Doctor
            </button>
          </form>
          <h2>Added Doctors:</h2>
          <ul>
            {doctors.map((doctor, index) => (
              <li key={index}>
                {doctor.firstName} {doctor.lastName} - {doctor.specialty} at {doctor.hospital}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;