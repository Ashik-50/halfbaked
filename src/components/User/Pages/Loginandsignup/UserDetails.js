import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/image.png'; // replace with your logo image

function UserDetails() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [isPregnant, setIsPregnant] = useState(false);
  const [monthOfPregnancy, setMonthOfPregnancy] = useState('');
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState('');
  const [consultingDoctor, setConsultingDoctor] = useState('');
  const [hadDiseaseBefore, setHadDiseaseBefore] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState('');
  const [diseaseConsultingDoctor, setDiseaseConsultingDoctor] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    if (event.target.value !== 'female') {
      setIsPregnant(false);
    }
  };

  const handleDiseaseChange = (event) => {
    setSelectedDisease(event.target.value);
    if (event.target.value === '') {
      setDiseaseConsultingDoctor('');
      setMedicalHistory('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
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
        maxWidth: '600px',
        maxHeight: '90vh',
        overflowY: 'auto'
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
        }}>User Details</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              style={{
                width: '100%',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              style={{
                width: '100%',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              style={{
                width: '100%',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              style={{
                width: '100%',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Date of Birth</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              style={{
                width: '100%',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Gender</label>
            <select
              value={gender}
              onChange={handleGenderChange}
              style={{
                width: '100%',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {gender === 'female' && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px' }}>Are you pregnant?</label>
              <select
                value={isPregnant ? 'yes' : 'no'}
                onChange={(e) => setIsPregnant(e.target.value === 'yes')}
                style={{
                  width: '100%',
                  padding: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          )}

          {isPregnant && (
            <>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>Month of Pregnancy</label>
                <input
                  type="number"
                  value={monthOfPregnancy}
                  onChange={(e) => setMonthOfPregnancy(e.target.value)}
                  placeholder="Enter month of pregnancy"
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>Expected Delivery Date</label>
                <input
                  type="date"
                  value={expectedDeliveryDate}
                  onChange={(e) => setExpectedDeliveryDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>Consulting Doctor</label>
                <input
                  type="text"
                  value={consultingDoctor}
                  onChange={(e) => setConsultingDoctor(e.target.value)}
                  placeholder="Enter consulting doctor's name"
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                />
              </div>
            </>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Have you had any disease before?</label>
            <select
              value={hadDiseaseBefore ? 'yes' : 'no'}
              onChange={(e) => setHadDiseaseBefore(e.target.value === 'yes')}
              style={{
                width: '100%',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '5px'
              }}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          {hadDiseaseBefore && (
            <>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>Select Disease</label>
                <select
                  value={selectedDisease}
                  onChange={handleDiseaseChange}
                  style={{
                    width: '100%',
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                >
                  <option value="">Select Disease</option>
                  <option value="diabetes">Diabetes</option>
                  <option value="hypertension">Hypertension</option>
                  <option value="asthma">Asthma</option>
                  <option value="cancer">Cancer</option>
                  <option value="heart disease">Heart Disease</option>
                </select>
              </div>

              {selectedDisease && (
                <>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>Consulting Doctor</label>
                    <input
                      type="text"
                      value={diseaseConsultingDoctor}
                      onChange={(e) => setDiseaseConsultingDoctor(e.target.value)}
                      placeholder="Enter consulting doctor's name"
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>Medical History</label>
                    <textarea
                      value={medicalHistory}
                      onChange={(e) => setMedicalHistory(e.target.value)}
                      placeholder="Enter your medical history"
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}
                    />
                  </div>
                </>
              )}
            </>
          )}
          <Link to="/userlogin">
          <button type="submit" style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%'
          }}>
            Submit
          </button>
          </Link>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px'
          }}>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserDetails;
