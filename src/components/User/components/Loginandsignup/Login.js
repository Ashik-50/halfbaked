import React from "react";
import { listreducer } from "./Reducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import BackgroundVideo from './BackgroundVideo'; // Import the background video component

const initialState = {
  email: "",
  password: "",
  loggedin: false,
  error: false
};

const Login = () => {
  const [state, dispatch] = React.useReducer(listreducer, initialState);

  const handleSubmit = (e) => {
    dispatch({
      type: "Change_input",
      payload: { name: e.target.name, value: e.target.value }
    });
  };

  const check = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    if (!email || !password) {
      toast.error("Fields are required");
      return;
    }
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: state.email, password: state.password })
    });
    const data = await res.json();
    if (data.success) {
      dispatch({ type: "SUCCESS" });
      toast.success("Login successfully");
    } else {
      dispatch({ type: "ERROR" });
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <BackgroundVideo />
      <div className="login-container">
        <ToastContainer />
        <div className="login-form">
          {state.loggedin ? (
            <div className="card text-center p-4">
              <h2>You have Successfully logged in</h2>
              <button className="btn btn-danger mt-3" onClick={() => { dispatch({ type: "logout" }) }}>Logout</button>
            </div>
          ) : (
            <div className="card shadow-sm p-4">
              <div className="card-header text-center mb-4">
                <h3>LOGIN</h3>
              </div>
              <div className="card-body">
                <form onSubmit={check}>
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
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                  <br />
                  <div className="text-center mt-3">
                    <a href="#">Don't have an account? Register</a>
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

export default Login;
