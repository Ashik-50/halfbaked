import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import logo from '../Assets/logo.png';
Chart.defaults.scale.category = true;

const HomePage = () => {
  const randomData = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10));
  const randomData2 = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));

  const barChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Doctors',
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

  const doughnutChartData = {
    labels: ['Total Patients', 'Attended', 'Unattended'],
    datasets: [
      {
        data: [300, 270, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const doughnutChartOptions = {
    maintainAspectRatio: false,
    aspectRatio: 1.5,
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
            <Link to="/admin/home" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/admin/doc" style={{ color: '#fff', textDecoration: 'none' }}>Doctors</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/admin/add" style={{ color: '#fff', textDecoration: 'none' }}>Add Doctors</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/admin/user" style={{ color: '#fff', textDecoration: 'none' }}>Users</Link>
          </li>
          <li style={{ padding: 10, borderBottom: '1px solid #444' }}>
            <Link to="/admin/logout" style={{ color: '#fff', textDecoration: 'none' }}>Logout</Link>
          </li>
        </ul>
      </div>
      <div className="main-content" style={{ flex: 1, padding: 0 }}>
        <div className="header" style={{ backgroundColor: '#f0f0f0', padding: 10, borderBottom: '1px solid #ddd' }}>
          <h1>Home </h1>
        </div>
        <div className="content" style={{ padding: 20 }}>
          <h2>Statistics</h2>
          <div className="charts" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
            <div className="chart-container" style={{ width: 300,margin: 20, backgroundColor: '#fff', border: '1px solid #ddd', padding: 10, borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <Bar data={barChartData} options={options} width={300} height={200} />
            </div>
            <div className="chart-container" style={{ width: 300, margin: 20, backgroundColor: '#fff', border: '1px solid #ddd', padding: 10, borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <Doughnut data={doughnutChartData} options={doughnutChartOptions} width={300} height={200} />
            </div>
          </div>
          <h2>Recent Appointments</h2>
          <div className="table-container" style={{ overflowX: 'auto', padding: 20 }}>
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
    </div>
  );
};

export default HomePage;