import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import logo from '../Assets/logo.png';
Chart.defaults.scale.category = true;

const HomePage = () => {
  const randomData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
  const randomData2 = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));

  const lineChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Attended',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: randomData,
      },
      {
        label: 'Patients',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: randomData2,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
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
        <Link to="/dochome" style={{ color: '#fff', textDecoration: 'none' }}>
          Dashboard
        </Link>
      </li>
      <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
        <Link to="/docpat" style={{ color: '#fff', textDecoration: 'none' }}>
          Patients
        </Link>
      </li>
      <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
        <Link to="/docapp" style={{ color: '#fff', textDecoration: 'none' }}>
          Appointments
        </Link>
      </li>
      <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
        <Link to="/dochis" style={{ color: '#fff', textDecoration: 'none' }}>
          Consultation History
        </Link>
      </li>
      <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
        <Link to="/doclogout" style={{ color: '#fff', textDecoration: 'none' }}>
          Logout
        </Link>
      </li>
    </ul>
      </div>
      <div style={{ flex: 1, padding: '10px', marginLeft: 300, overflowY: 'auto' }}>
        <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Overview</h2>
        <div style={{ width: '80%', height: 400, marginBottom: 20 }}>
          <Line data={lineChartData} options={options} />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ width: '45%', backgroundColor: '#f7f7f7', padding: 20, borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Total Patients</h3>
            <p style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>300</p>
          </div>
          <div style={{ width: '45%', backgroundColor: '#f7f7f7', padding: 20, borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Attended Patients</h3>
            <p style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>270</p>
          </div>
          <div style={{ width: '45%', backgroundColor: '#f7f7f7', padding: 20, borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Unattended Patients</h3>
            <p style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>30</p>
          </div>
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, marginTop: 40 }}>Recent Appointments</h2>
        <div style={{ overflowX: 'auto', padding: 20 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Date</th>
                <th style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Doctor</th>
                <th style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Patient</th>
                <th style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>2022-01-01</td>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Dr. Smith</td>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>John Doe</td>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Attended</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>2022-01-02</td>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Dr. Johnson</td>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Jane Doe</td>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Unattended</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>2022-01-03</td>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Dr. Brown</td>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Bob Smith</td>
                <td style={{ border: '1px solid #ddd', padding: 10, textAlign: 'left' }}>Attended</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
