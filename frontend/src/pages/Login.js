import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      console.log("Login Success:", res.data);

      // Save token in localStorage (so user stays logged in)
      localStorage.setItem("token", res.data.token);

      // Redirect to Dashboard after login
      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="auth-page">  {/* Add this wrapper to prevent global effect */}
    <div className="auth-container">
      <h2>Login</h2>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
     
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
        </form> 
      <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        
    </div>
    </div>
  );
};

export default Login;
