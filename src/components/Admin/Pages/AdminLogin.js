import React from "react";
import './AdminLogin.css';
import BackgroundVideo from './BackgroundVideo'; // Import the background video component
import { Link } from "react-router-dom";
const AdminLogin = () => {
  return (
    <div className="login-page">
      <BackgroundVideo />
      <div className="login-container">
        <div className="login-form">
          <div className="card-header">
            <h3>ADMIN LOGIN</h3>
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
              <Link to="/adminhome">
                <button type="submit" className="btn btn-primary">Login</button>
              </Link>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;