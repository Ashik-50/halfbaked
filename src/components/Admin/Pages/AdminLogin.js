import React, { useState } from 'react';
import logo from '../Assets/logo.png'; // replace with your logo image
import { Link } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your admin login logic here
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f7f7f7',
      padding: '0 20px'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <img src={logo} alt="Logo" style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%'
          }} />
        </div>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{
            marginBottom: '20px'
          }}>
            <label style={{
              display: 'block',
              marginBottom: '10px'
            }}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your username"
              style={{
                width: '95%',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
          </div>
          <div style={{
            marginBottom: '20px'
          }}>
            <label style={{
              display: 'block',
              marginBottom: '10px'
            }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              style={{
                width: '95%',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
          </div>
          {error && <div style={{
            color: 'red',
            marginBottom: '20px'
          }}>{error}</div>}
          <Link to="/admin/home">
          <button type="submit" style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Login
          </button>
          </Link>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px'
          }}>
            <Link to="/login" style={{
              textDecoration: 'none',
              color: '#4CAF50'
            }}>Login as User</Link>
            <Link to="/doctor" style={{
              textDecoration: 'none',
              color: '#4CAF50'
            }}>Login as Doctor</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;