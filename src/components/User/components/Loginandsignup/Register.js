// Register.js
import React from "react";
import { listreducer } from "./Reducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import BackgroundVideo from '../BackgroundVideo'; // Import the background video component

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  registered: false,
  error: false
};

const Register = () => {
  const [state, dispatch] = React.useReducer(listreducer, initialState);

  const handleSubmit = (e) => {
    dispatch({
      type: "Change_input",
      payload: { name: e.target.name, value: e.target.value }
    });
  };

  const check = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = state;
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Fields are required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    if (data.success) {
      dispatch({ type: "SUCCESS" });
      toast.success("Registered successfully");
    } else {
      dispatch({ type: "ERROR" });
      toast.error("Registration failed");
    }
  };

  return (
    <div className="register-page">
      <BackgroundVideo />
      <div className="register-container">
        <ToastContainer />
        <div className="register-form">
          {state.registered ? (
            <div className="card text-center p-4">
              <h2>You have Successfully registered</h2>
              <button className="btn btn-danger mt-3" onClick={() => { dispatch({ type: "logout" }) }}>Logout</button>
            </div>
          ) : (
            <div className="card shadow-sm p-4">
              <div className="card-header text-center mb-4">
                <h3>REGISTER</h3>
              </div>
              <div className="card-body">
                <form onSubmit={check}>
                  <div className="form-group mb-3">
                    <label>Name:</label>
                    <div className="input-group">
                      <input type="text" name="name" placeholder="Enter Name.." onChange={handleSubmit} className="form-control" />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label>Email:</label>
                    <div className="input-group">
                      <input type="email" name="email" placeholder="Enter Email.." onChange={handleSubmit} className="form-control" />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label>Password:</label>
                    <div className="input-group">
                      <input type="password" name="password" placeholder="Enter Password.." onChange={handleSubmit} className="form-control" />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label>Confirm Password:</label>
                    <div className="input-group">
                      <input type="password" name="confirmPassword" placeholder="Confirm Password.." onChange={handleSubmit} className="form-control" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Register</button>
                  <br />
                  <div className="text-center mt-3">
                    <a href="#">Already have an account? Login</a>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;