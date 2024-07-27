import React from "react";
import './DoctorLogin.css';
import BackgroundVideo from './BackgroundVideo';
import { Link } from 'react-router-dom'; 

const DoctorLogin = () => {
  return (
    <div className="login-page">
      <BackgroundVideo />
      <div className="login-container">
        <div className="login-form">
          <div className="card-header">
            <h3>DOCTOR LOGIN</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Email:</label>
                <div className="input-group">
                  <input type="email" placeholder="Enter Email.." className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label>Password:</label>
                <div className="input-group">
                  <input type="password" placeholder="Enter Password.." className="form-control" />
                </div>
              </div>
              <Link to="/dochome">
                <button type="submit" className="btn btn-primary">Login</button>
              </Link>
              <br />
              <div className="text-center">
                <Link to="/userlogin">Are you a User?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;