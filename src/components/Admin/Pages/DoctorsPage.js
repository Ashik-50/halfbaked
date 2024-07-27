// DoctorsPage.js
import React, { useState, useEffect } from 'react';
import './dcss.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');

  const fetchDoctors = async () => {
    const response = await fetch('https://randomuser.me/api/?results=30&nat=gb');
    const data = await response.json();
    setDoctors(data.results);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleRemoveDoctor = (index) => {
    const newDoctors = [...doctors];
    newDoctors.splice(index, 1);
    setDoctors(newDoctors);
  };

  return (
    <div className="admin-dashboard" style={{ display: 'flex', height: '100vh' }}>
      <div className="sidebar" style={{ width: 250, backgroundColor: '#333', color: '#fff', padding: 0, position: 'fixed', top: 0, bottom: 0, left: 0 }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 20, paddingLeft: 5 }}>
          <img src={logo} alt="Logo" style={{ width: 40, height: 40, marginRight: 10 }} />
          <h2 style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}>CARESPHERE</h2>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/adminhome" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/admindoc" style={{ color: '#fff', textDecoration: 'none' }}>Doctors</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/adminadd" style={{ color: '#fff', textDecoration: 'none' }}>Add Doctors</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/adminuser" style={{ color: '#fff', textDecoration: 'none' }}>Users</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/adminlogout" style={{ color: '#fff', textDecoration: 'none' }}>Logout</Link>
          </li>
        </ul>
      </div>
      <div className="main-content" style={{ flex: 1, padding: 0 }}>
        <div className="header" style={{ backgroundColor: '#f0f0f0', padding: 10, borderBottom: '1px solid #ddd' }}>
          <h1>Doctors</h1>
        </div>
        <div className="content" style={{ padding: 20 }}>
          
          <div className="searchArea" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <input
              type="text"
              placeholder="Search..."
              className="doctorListSearch"
              onChange={handleSearch}
              value={search}
              style={{ width: 300, padding: 10, fontSize: 16, borderRadius: 10, border: '1px solid #ddd' }}
            />
          </div>
          <div className="doctorList">
            {doctors.filter((doctor) => {
              return (
                doctor.name.first.toLowerCase().includes(search.toLowerCase()) ||
                doctor.name.last.toLowerCase().includes(search.toLowerCase()) ||
                doctor.email.toLowerCase().includes(search.toLowerCase()) ||
                doctor.location.country.toLowerCase().includes(search.toLowerCase())
              );
            }).map((doctor, index) => {
              return (
                <div className="doctor-card" key={index}>
                  <div className="doctor-image">
                    <img src={doctor.picture.thumbnail} alt={doctor.name.first} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                  </div>
                  <div className="doctor-info">
                    <h3 className="username">{doctor.name.title} {doctor.name.first} {doctor.name.last}</h3>
                    <p className="specialty">Specialty: {doctor.login.username}</p>
                    <a href={`mailto:${doctor.email}`} className="email">
                      {doctor.email}
                    </a>
                    <p className="location">{doctor.location.country}</p>
                    <br />
                    <button className="remove-button" onClick={() => handleRemoveDoctor(index)}>Remove Doctor</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;