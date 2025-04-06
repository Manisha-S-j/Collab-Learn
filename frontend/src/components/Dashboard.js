
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import Profile from "./Profile";
import ProjectBoard from "./ProjectBoard";
import InternshipBoard from "./InternshipBoard";
import CP from "./CP";
import Chatbot from "./Chatbot";
import { FaCode, FaBriefcase, FaProjectDiagram, FaRocket, FaBook, FaRobot } from "react-icons/fa";
import Hackathons from "./Hackathons";
import DiscussionForum from "./DiscussionForum";
import { FaComments } from "react-icons/fa";
import ActivityFeed from "./ActivityFeed";
import UserList from "./UserList";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [showChatbot, setShowChatbot] = useState(false); // ✅ Toggle for chatbot />}


  const userId = 1;

  useEffect(() => {
    axios.get(`${BASE_URL}/api/users/${userId}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("❌ API Error:", err));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`dashboard ${darkMode ? "dark" : ""}`}>
      <aside className="sidebar">
        <h2>📌 Menu</h2>
        <ul>
          <li className={activeSection === "competitive" ? "active" : ""} onClick={() => setActiveSection("competitive")}>
            <FaCode /> Competitive Programming
          </li>
          <li className={activeSection === "internship" ? "active" : ""} onClick={() => setActiveSection("internship")}>
            <FaBriefcase /> Internship & Placement
          </li>
          <li className={activeSection === "project" ? "active" : ""} onClick={() => setActiveSection("project")}>
            <FaProjectDiagram /> Project Collaboration
          </li>
          <li className={activeSection === "hackathons" ? "active" : ""} onClick={() => setActiveSection("hackathons")}>
            <FaRocket /> Hackathons
          </li>
          <li className={activeSection === "resources" ? "active" : ""} onClick={() => setActiveSection("resources")}>
            <FaBook /> Resources
          </li>
          <li className={activeSection === "forum" ? "active" : ""} onClick={() => setActiveSection("forum")}>
            <FaComments /> Discussion Forum
          </li>
          <li className={activeSection === "users" ? "active" : ""} onClick={() => setActiveSection("users")}>
            👥 Find People
          </li>
          <li className={activeSection === "activity" ? "active" : ""} onClick={() => setActiveSection("activity")}>
            🔔 Activity Feed
          </li>
        </ul>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </aside>

      <main className="main-content">
        {activeSection === "home" && (
          <>
            <h1>🚀 Welcome to the Student Collaborative App</h1>
            <p>
              This platform helps students collaborate on projects, participate in
              hackathons, and enhance skills in competitive programming.
            </p>
          </>
        )}
        {activeSection === "project" && <ProjectBoard />}
        {activeSection === "competitive" && <CP />}
        {activeSection === "internship" && <InternshipBoard />}
        {activeSection === "hackathons" && (
          <div className="hackathons-page">
            <h1>🚀 Hackathons</h1>
            <Hackathons />
          </div>
        )}
        {activeSection === "resources" && <h2>📚 Resources Section</h2>}
        {activeSection === "forum" && <DiscussionForum />}
        {activeSection === "users" && <UserList />}
        {activeSection === "activity" && <ActivityFeed />}
      </main>

      {/* Profile Section */}
      <aside className="profile-section">
        <h2>👤 My Profile</h2>
        {user ? <Profile userId={user.id} /> : <p>Loading...</p>}
      </aside>

      {/* ✅ Floating Chatbot Button */}
      {/* <button className="chatbot-toggle" onClick={() => setShowChatbot(!showChatbot)}>
        <FaRobot />
      </button> */}

      <Chatbot />


      {/* ✅ Chatbot Window (Only Visible When Open) */}
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </div>
  );
};

export default Dashboard;

