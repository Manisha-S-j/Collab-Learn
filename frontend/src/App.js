
import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import  "./pages/Auth.css";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>   
  );
}

export default App;
