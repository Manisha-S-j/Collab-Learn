import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Auth.css";


const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      console.log("Signup Success:", res.data);
      navigate("/dashboard"); // Redirect to login after signup
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (

    <div className="auth-page">
    <div className="auth-container">
      {/* Add this wrapper to prevent global effect */}
      <h2>Signup</h2>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form  className="auth-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>

      <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        
    </div>
    </div>

  
  );
};

export default Signup;
