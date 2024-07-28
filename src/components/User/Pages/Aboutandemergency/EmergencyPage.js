import React from 'react';
import { Box, Typography, Button, Container, CssBaseline } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../Assets/image.png'; // Adjust the path as necessary

function EmergencyPage() {
    const navigate = useNavigate();

    // Replace these with the actual phone numbers for the nearby hospital and ambulance service
    const hospitalPhoneNumber = '+1234567890';
    const ambulancePhoneNumber = '+0987654321';

    const handleBackToHome = () => {
        navigate('/');
    };

    const handleCallHospital = () => {
        window.location.href = `tel:${hospitalPhoneNumber}`;
    };

    const handleRequestAmbulance = () => {
        window.location.href = `tel:${ambulancePhoneNumber}`;
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
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#333',
                    textAlign: 'center',
                    padding: 3,
                }}
            >
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            padding: 4,
                            borderRadius: 2,
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <img
                            src={logo}
                            alt="Emergency Alert Logo"
                            style={{
                                width: '100px',  // Adjust size as needed
                                height: 'auto',
                                marginBottom: '20px',  // Space below the logo
                            }}
                        />
                        <Typography variant="h4" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
                            Emergency Alert
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#666' }}>
                            Please follow the instructions below carefully. This is an important notification regarding an emergency situation. 
                            Make sure to take the necessary actions immediately and stay safe.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 4,
                            }}
                        >
                            <Button
                                variant="contained"
                                color="error"
                                sx={{ width: '100%', height: '50px', fontSize: '18px', marginBottom: 2 }}
                                onClick={handleCallHospital}
                            >
                                Call Hospital
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                sx={{ width: '100%', height: '50px', fontSize: '18px', marginBottom: 2 }}
                                onClick={handleRequestAmbulance}
                            >
                                Request Ambulance
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                sx={{ width: '100%', height: '50px', fontSize: '18px' }}
                                onClick={handleBackToHome}
                            >
                                Back to Home
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default EmergencyPage;