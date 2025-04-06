
// // import React from "react";
// // import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText, Avatar, Container, Paper } from "@mui/material";

// // const Dashboard = () => {
// //   const menuItems = ["Competitive Programming", "Internships", "Project Collaboration", "Hackathons", "Resources"];

// //   return (
// //     <Box>  {/* ✅ This is the parent element wrapping everything */}

// //       {/* Top Navigation Bar */}
// //       <AppBar position="fixed">
// //         <Toolbar>
// //           <Typography variant="h6" sx={{ flexGrow: 1 }}>
// //             Student Collaborative App
// //           </Typography>
// //         </Toolbar>
// //       </AppBar>

// //       <Box sx={{ display: "flex", marginTop: 8 }}>  {/* Add marginTop to avoid overlapping with AppBar */}

// //         {/* Sidebar */}
// //         <Drawer variant="permanent" sx={{ width: 250, flexShrink: 0, "& .MuiDrawer-paper": { width: 250, boxSizing: "border-box" } }}>
// //           <Toolbar />
// //           <List>
// //             {menuItems.map((text) => (
// //               <ListItem button key={text}>
// //                 <ListItemText primary={text} />
// //               </ListItem>
// //             ))}
// //           </List>
// //         </Drawer>

// //         {/* Main Content */}
// //         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
// //           <Toolbar />
// //           <Container>
// //             <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
// //               <Typography variant="h4">Welcome to Student Collaborative App</Typography>
// //               <Typography variant="body1">A platform for students to collaborate, compete, and grow.</Typography>
// //             </Paper>
// //           </Container>
// //         </Box>

// //         {/* Right Section: Profile */}
// //         <Box sx={{ width: 250, p: 2, bgcolor: "background.paper", position: "fixed", right: 0 }}>
// //           <Avatar sx={{ width: 80, height: 80, margin: "auto" }}>U</Avatar>
// //           <Typography variant="h6" textAlign="center">User Profile</Typography>
// //           <Typography variant="body2" textAlign="center">Create or Edit Your Profile</Typography>
// //         </Box>

// //       </Box> {/* ✅ Closing parent Box */}

// //     </Box>  /* ✅ Closing parent Box */
// //   );
// // };

// // export default Dashboard;


// // import React from "react";
// // import { Box, Typography, Paper, Avatar, List, ListItem, ListItemText } from "@mui/material";

// // const Dashboard = () => {
// //   return (
// //     <Box
// //       sx={{
// //         display: "grid",
// //         gridTemplateColumns: "250px auto 300px",
// //         gap: 2,
// //         height: "100vh",
// //         padding: 2,
// //         backgroundColor: "#f4f6f8",
// //       }}
// //     >
// //       {/* Left Sidebar */}
// //       <Paper elevation={3} sx={{ padding: 2 }}>
// //         <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
// //           Menu
// //         </Typography>
// //         <List>
// //           {["Competitive Programming", "Internship & Placement Board", "Project Collaboration", "Hackathons", "Resources"].map(
// //             (text) => (
// //               <ListItem button key={text}>
// //                 <ListItemText primary={text} />
// //               </ListItem>
// //             )
// //           )}
// //         </List>
// //       </Paper>

// //       {/* Middle Section */}
// //       <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
// //         <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
// //           Welcome to the Student Collaborative App
// //         </Typography>
// //         <Typography variant="body1">
// //           This platform helps students collaborate on projects, participate in hackathons, and enhance skills in competitive programming.
// //         </Typography>
// //       </Paper>

// //       {/* Right Sidebar (User Profile) */}
// //       <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
// //         <Avatar sx={{ width: 80, height: 80, margin: "auto" }} />
// //         <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
// //           User Profile
// //         </Typography>
// //         <Typography variant="body2" sx={{ color: "gray" }}>
// //           Create or update your profile
// //         </Typography>
// //       </Paper>
// //     </Box>
// //   );
// // };

// // export default Dashboard;




// // import "./Dashboard.css";
// // import Profile from "./Profile"; 
// // import React, { useState } from "react";
// // // Import the new CSS file

// // const Dashboard = () => { const [darkMode, setDarkMode] = useState(false);

// //     const toggleDarkMode = () => {
// //       setDarkMode(!darkMode);
// //       document.body.classList.toggle("dark-mode");
// //     };

// //     return (
// //       <div className={`dashboard ${darkMode ? "dark" : ""}`}>
// //         {/* Sidebar */}
// //         <aside className="sidebar">
// //           <h2>📌 Menu</h2>
// //           <ul>
// //             <li><a href="#">🏆 Competitive Programming</a></li>
// //             <li><a href="#">💼 Internship & Placement</a></li>
// //             <li><a href="#">🤝 Project Collaboration</a></li>
// //             <li><a href="#">🚀 Hackathons</a></li>
// //             <li><a href="#">📚 Resources</a></li>
// //           </ul>
// //           {/* Dark Mode Toggle */}
// //           <button className="dark-mode-toggle" onClick={toggleDarkMode}>
// //             {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
// //           </button>
// //         </aside>


// //       {/* Main Content */}
// //       <main className="main-content">
// //         <h1>🚀 Welcome to the Student Collaborative App</h1>
// //         <p>
// //           This platform helps students collaborate on projects, participate in
// //           hackathons, and enhance skills in competitive programming.
// //         </p>
// //       </main>


// //       <Profile/>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Dashboard.css";
// import Profile from "./Profile";
// import ProjectBoard from "./ProjectBoard";
// import InternshipBoard from "./InternshipBoard";
// import CP from "./CP";
// import Chatbot from "./Chatbot";
// import { FaCode, FaBriefcase, FaProjectDiagram, FaRocket, FaBook } from "react-icons/fa";

// const Dashboard = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [user, setUser] = useState(null);
//   const [activeSection, setActiveSection] = useState("home"); // NEW: Track active section

//   const userId = 1; // Hardcoded for now (Replace with dynamic user ID)

//   // Fetch user data from backend
//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/users/${userId}`)
//       .then((res) => setUser(res.data))
//       .catch((err) => console.error("❌ API Error:", err));
//   }, []);

//   // Toggle Dark Mode
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark-mode");
//   };

//   return (
//     <div className={`dashboard ${darkMode ? "dark" : ""}`}>

//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2>📌 Menu</h2>
//         <ul>
//           <li className={activeSection === "competitive" ? "active" : ""} onClick={() => setActiveSection("competitive")}>
//             <FaCode /> Competitive Programming
//           </li>
//           <li className={activeSection === "internship" ? "active" : ""} onClick={() => setActiveSection("internship")}>
//             <FaBriefcase /> Internship & Placement
//           </li>
//           <li className={activeSection === "project" ? "active" : ""} onClick={() => setActiveSection("project")}>
//             <FaProjectDiagram /> Project Collaboration
//           </li>
//           <li className={activeSection === "hackathons" ? "active" : ""} onClick={() => setActiveSection("hackathons")}>
//             <FaRocket /> Hackathons
//           </li>
//           <li className={activeSection === "resources" ? "active" : ""} onClick={() => setActiveSection("resources")}>
//             <FaBook /> Resources
//           </li>
//         </ul>
//         <button className="dark-mode-toggle" onClick={toggleDarkMode}>
//           {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//         </button>
//       </aside>

//       {/* Main Content (Dynamic Switching) */}
//       <main className="main-content">
//         {activeSection === "home" && (
//           <>
//             <h1>🚀 Welcome to the Student Collaborative App</h1>
//             <p>
//               This platform helps students collaborate on projects, participate in
//               hackathons, and enhance skills in competitive programming.
//             </p>
//           </>
//         )}
//         {activeSection === "project" && <ProjectBoard />}
//         {activeSection === "competitive" && <CP />}
//         {activeSection === "internship" && <InternshipBoard />}
//         {activeSection === "hackathons" && <h2>🚀 Hackathons Section</h2>}
//         {activeSection === "resources" && <h2>📚 Resources Section</h2>}

//         {/* ✅ Add Chatbot here (floating style) */}
//         <Chatbot />
//       </main>

//       {/* Profile Section on the Right Side */}
//       <aside className="profile-section">
//         <h2>👤 My Profile</h2>
//         {user ? <Profile userId={user.id} /> : <p>Loading...</p>}
//       </aside>
//     </div>
//   );
// };

// export default Dashboard;


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


const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [showChatbot, setShowChatbot] = useState(false); // ✅ Toggle for chatbot />}


  const userId = 1;

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${userId}`)
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

