import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import "./style.css";
import logo from '../../Assets/image.png';

const doctors = [
  { id: 1, img: "doc2.jpeg", title: "Dr. T Ravishankar", description: "MBBS, MD, DM - Shankar Endoscopy Centre, RaceCourse, Coimbatore - Ravi Clinic, ₹700 Consultation fee at clinic" },
  { id: 2, img: "doc3.jpeg", title: "Dr. Duraisamy", description: "Cardiologist with 17 years of experience overall, Kovaipudur, Coimbatore - Durai Clinic, ₹400 Consultation fee at clinic" },
  { id: 3, img: "doc4new.jpeg", title: "Dr. Suganya", description: "Gynecologist with 17 years of experience, Saibaba Colony, Coimbatore - Baba Clinic, ₹500 Consultation fee at clinic" },
  { id: 4, img: "doc5neww.jpg", title: "Dr. T. Kannan", description: "BSc - Speech & Hearing Therapist, Audiologist, Speech Therapist with 30 Years Experience Overall" },
  { id: 5, img: "doc6.jpg", title: "Dr. Prathika", description: "Gynecologist with 5 years of experience overall, Gandhipuram, Coimbatore - GP Hospital, ₹300 Consultation fee at clinic" },
  { id: 6, img: "doc7.jpg", title: "Mr. Ramkumar R", description: "Physiotherapist with 5 years of experience overall, Gandhipuram, Coimbatore, ₹300 Consultation fee at clinic" },
  { id: 7, img: "doc8.jpg", title: "Dr. Jane Elizabeth John", description: "BDS Dentist with 12 Years Experience Overall, Medical Registration Verified" },
  { id: 8, img: "doc9.jpg", title: "Rajesh", description: "Gynecologist/Obstetrician 31 years experience overall Gandhipuram, Coimbatore GP Hospital ₹300 Consultation fee at clinic" },
  { id: 9, img: "doc10.jpeg", title: "Dr. Prince Herbert", description: "Dentist with 46 years of experience overall" },
  { id: 10, img: "doc10new.jpg", title: "Dr. Danush Kumar R", description: "Dentist with 7 years of experience overall, Saibaba Colony, Coimbatore - Meso Dental" },
  {id: 11, img: "doc11new.jpg", title: "Dr.Aakash", description: "Cancer Specialist with 4 years of experience "},
];

const Doctor = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleConfirmAppointment = () => {
    if (!appointmentDate || !appointmentTime) {
      alert("Please select both a date and time for your appointment.");
      return;
    }
    // Implement actual booking logic here

    // Close modal after confirming
    setSelectedDoctor(null);
  };

  const handleCancelAppointment = () => {
    setSelectedDoctor(null); // Close modal without confirming
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const title = doctor.title.toLowerCase();
    const description = doctor.description.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return title.includes(searchTermLower) || description.includes(searchTermLower);
  });

  return (
    <div className="doctor-container">
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
      <h1 className="header">Book an Appointment with Our Doctors</h1>
      <div className="doctor-grid">
        {filteredDoctors.map((doctor) => (
          <Card
            key={doctor.id}
            img={doctor.img}
            title={doctor.title}
            description={doctor.description}
          >
            <div className="button-container">
              <button
                className="book-appointment-btn"
                onClick={() => setSelectedDoctor(doctor)}
              >
                Book Appointment
              </button>
            </div>
          </Card>
        ))}
      </div>

      {selectedDoctor && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-header">Book Appointment with {selectedDoctor.title}</h2>
            <form className="appointment-form">
              <label htmlFor="date">Select Date:</label>
              <input
                type="date"
                id="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="form-input"
              />
              <label htmlFor="time">Select Time:</label>
              <input
                type="time"
                id="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="form-input"
              />
              <div className="modal-buttons">
                <Link to ="/thankyou">
                <button
                  type="button"
                  className="confirm-btn"
                  onClick={handleConfirmAppointment}
                >
                  Confirm
                </button>
                </Link>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCancelAppointment}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctor;