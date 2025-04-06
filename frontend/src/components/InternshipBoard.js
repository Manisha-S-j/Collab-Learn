// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./InternshipBoard.css";
// import { FaBuilding, FaMapMarkerAlt, FaClock, FaBriefcase } from "react-icons/fa";

// const InternshipBoard = () => {
//   const [selectedType, setSelectedType] = useState("All"); // Filter state

//   // List of internships
//   const internships = [
//     { _id: 1, title: "Web Development Intern", company: "Netflix", location: "Remote", duration: "3", type: "Online Internship", applyLink: "https://jobs.netflix.com/" },
//     { _id: 2, title: "Machine Learning Intern", company: "IBM", location: "Remote", duration: "4", type: "Online Internship", applyLink: "https://www.ibm.com/careers/" },
//     { _id: 3, title: "Cybersecurity Analyst Intern", company: "Tesla", location: "Remote", duration: "6", type: "Online Internship", applyLink: "https://www.tesla.com/careers/" },
//     { _id: 4, title: "Software Engineering Intern", company: "Microsoft", location: "Hyderabad, India", duration: "6", type: "Offline Internship", applyLink: "https://careers.microsoft.com/" },
//     { _id: 5, title: "Data Science Intern", company: "Amazon", location: "Bengaluru, India", duration: "4", type: "Offline Internship", applyLink: "https://www.amazon.jobs/" },
//     { _id: 6, title: "AI Research Intern", company: "Google", location: "California, USA", duration: "3", type: "Offline Internship", applyLink: "https://careers.google.com/" },
//     { _id: 7, title: "Frontend Developer Intern", company: "Adobe", location: "Remote", duration: "3", type: "Online Internship", applyLink: "https://adobe.com/careers/" },
//     { _id: 8, title: "Cloud Computing Intern", company: "Oracle", location: "Pune, India", duration: "4", type: "Offline Internship", applyLink: "https://oracle.com/careers/" },
//     { _id: 9, title: "UX/UI Designer Intern", company: "Apple", location: "Bangalore, India", duration: "5", type: "Offline Internship", applyLink: "https://apple.com/careers/" },
//   ];
// // const InternshipBoard = () => {
// //   const [internships, setInternships] = useState([
// //     {
// //       _id: 1,
// //       title: "Software Engineer Intern",
// //       company: "Google",
// //       location: "California, USA",
// //       duration: "6",
// //       type: "Internship",
// //       applyLink: "https://careers.google.com",
// //     },
// //     {
// //       _id: 2,
// //       title: "Data Science Intern",
// //       company: "Amazon",
// //       location: "Remote",
// //       duration: "3",
// //       type: "Internship",
// //       applyLink: "https://www.amazon.jobs",
// //     },
// //     {
// //       _id: 3,
// //       title: "Frontend Developer Intern",
// //       company: "Microsoft",
// //       location: "Hyderabad, India",
// //       duration: "4",
// //       type: "Internship",
// //       applyLink: "https://careers.microsoft.com",
// //     },

// //     {
// //         _id: 4,
// //         title: "Web Development Intern",
// //         company: "Netflix",
// //         location: "Remote",
// //         duration: "3",
// //         type: "Online Internship",
// //         applyLink: "https://jobs.netflix.com/",
// //       },
// //       {
// //         _id: 5,
// //         title: "Machine Learning Intern",
// //         company: "IBM",
// //         location: "Remote",
// //         duration: "4",
// //         type: "Online Internship",
// //         applyLink: "https://www.ibm.com/careers/",
// //       },
// //       {
// //         _id: 6,
// //         title: "Cybersecurity Analyst Intern",
// //         company: "Tesla",
// //         location: "Remote",
// //         duration: "6",
// //         type: "Online Internship",
// //         applyLink: "https://www.tesla.com/careers/",
// //       },
// //       {
// //         _id: 7,
// //         title: "Software Engineering Intern",
// //         company: "Microsoft",
// //         location: "Hyderabad, India",
// //         duration: "6",
// //         type: "Offline Internship",
// //         applyLink: "https://careers.microsoft.com/",
// //       },
// //       {
// //         _id: 8,
// //         title: "Data Science Intern",
// //         company: "Amazon",
// //         location: "Bengaluru, India",
// //         duration: "4",
// //         type: "Offline Internship",
// //         applyLink: "https://www.amazon.jobs/",
// //       },
// //       {
// //         _id: 9,
// //         title: "AI Research Intern",
// //         company: "Google",
// //         location: "California, USA",
// //         duration: "3",
// //         type: "Offline Internship",
// //         applyLink: "https://careers.google.com/",
// //       }
// //   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [newInternship, setNewInternship] = useState({
//     title: "",
//     company: "",
//     location: "",
//     duration: "",
//     type: "",
//     applyLink: "",
//   });

//   // Fetch internships from backend (if available)
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/internships")
//       .then((res) => setInternships([...internships, ...res.data])) // Merge backend data with dummy data
//       .catch((err) => console.error("API Error:", err));
//   }, []);

//   // Handle form input change
//   const handleChange = (e) => {
//     setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
//   };

//   // Handle adding a new internship
//   const handleAddInternship = () => {
//     if (!newInternship.title || !newInternship.company || !newInternship.location || !newInternship.applyLink) return;

//     axios.post("http://localhost:5000/api/internships", newInternship)
//       .then((res) => {
//         setInternships([...internships, res.data]); // Update UI
//         setShowForm(false);
//         setNewInternship({ title: "", company: "", location: "", duration: "", type: "", applyLink: "" });
//       })
//       .catch((err) => console.error("Error adding internship:", err));
//   };

//   return (
//     <div className="internship-board">
//       <h2>💼 Internship & Placement Board</h2>
//       <button className="add-internship-btn" onClick={() => setShowForm(true)}>➕ Add Internship</button>

//       <div className="internship-grid">
//         {internships.length === 0 ? (
//           <p>No internships available.</p>
//         ) : (
//           internships.map((job) => (
//             <div key={job._id} className="internship-card">
//               <h3>{job.title}</h3>
//               <p><FaBuilding /> {job.company}</p>
//               <p><FaMapMarkerAlt /> {job.location}</p>
//               <p><FaClock /> {job.duration} months</p>
//               <p><FaBriefcase /> {job.type}</p>
//               <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="apply-btn">Apply Now</a>
//             </div>
//           ))
//         )}
//       </div>

//       {showForm && (
//         <div className="form-popup">
//           <div className="form-container">
//             <h3>Add Internship</h3>
//             <input type="text" name="title" placeholder="Job Title" value={newInternship.title} onChange={handleChange} />
//             <input type="text" name="company" placeholder="Company" value={newInternship.company} onChange={handleChange} />
//             <input type="text" name="location" placeholder="Location" value={newInternship.location} onChange={handleChange} />
//             <input type="number" name="duration" placeholder="Duration (months)" value={newInternship.duration} onChange={handleChange} />
//             <input type="text" name="type" placeholder="Job Type (Full-time/Internship)" value={newInternship.type} onChange={handleChange} />
//             <input type="text" name="applyLink" placeholder="Application Link" value={newInternship.applyLink} onChange={handleChange} />
//             <button className="submit-btn" onClick={handleAddInternship}>🚀 Add Internship</button>
//             <button className="close-btn" onClick={() => setShowForm(false)}>❌ Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InternshipBoard;



import React, { useState } from "react";
import "./InternshipBoard.css"; // Import styles

const InternshipBoard = () => {
  const [selectedType, setSelectedType] = useState("All"); // Filter state
  const [internships, setInternships] = useState([
    { id: 1, title: "Web Development Intern", company: "Netflix", location: "Remote", duration: "3", type: "Online", applyLink: "https://jobs.netflix.com/" },
    { id: 2, title: "Machine Learning Intern", company: "IBM", location: "Remote", duration: "4", type: "Online", applyLink: "https://www.ibm.com/careers/" },
    { id: 3, title: "Software Engineering Intern", company: "Microsoft", location: "Hyderabad, India", duration: "6", type: "Offline", applyLink: "https://careers.microsoft.com/" },
   
  ]);

  const [newInternship, setNewInternship] = useState({
    title: "",
    company: "",
    location: "",
    duration: "",
    type: "Online",
    applyLink: "",
  });

  const [showForm, setShowForm] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
  };

  // Add new internship
  const handleAddInternship = () => {
    if (!newInternship.title || !newInternship.company || !newInternship.location || !newInternship.duration || !newInternship.applyLink) return;

    setInternships([...internships, { id: internships.length + 1, ...newInternship }]);
    setNewInternship({ title: "", company: "", location: "", duration: "", type: "Online", applyLink: "" });
    setShowForm(false);
  };

  // Filter Internships
  const filteredInternships = internships.filter(
    (internship) => selectedType === "All" || internship.type === selectedType
  );

  return (
    <div className="internship-board">
      <h2>🎯 Internship & Placement Board</h2>

      {/* Filter Section */}
      <div className="filter-section">
        <button className={selectedType === "All" ? "active" : ""} onClick={() => setSelectedType("All")}>All</button>
        <button className={selectedType === "Online" ? "active" : ""} onClick={() => setSelectedType("Online")}>Online</button>
        <button className={selectedType === "Offline" ? "active" : ""} onClick={() => setSelectedType("Offline")}>Offline</button>
      </div>

      {/* Add Internship Button */}
      <button className="add-internship-btn" onClick={() => setShowForm(true)}>➕ Add Internship</button>

      {/* Internship Cards */}
      <div className="internship-grid">
        {filteredInternships.map((internship) => (
          <div key={internship.id} className="internship-card">
            <h3>{internship.title}</h3>
            <p><strong>🏢 {internship.company}</strong></p>
            <p>📍 {internship.location} | ⏳ {internship.duration} Months</p>
            <p>📌 <strong>{internship.type} Internship</strong></p>
            <a href={internship.applyLink} target="_blank" rel="noopener noreferrer" className="apply-btn">Apply Now 🚀</a>
          </div>
        ))}
      </div>

      {/* New Internship Form (Popup) */}
      {showForm && (
        <div className="form-popup">
          <div className="form-container">
            <h3>Add a New Internship</h3>
            <input type="text" name="title" placeholder="Internship Title" value={newInternship.title} onChange={handleChange} />
            <input type="text" name="company" placeholder="Company Name" value={newInternship.company} onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" value={newInternship.location} onChange={handleChange} />
            <input type="text" name="duration" placeholder="Duration (Months)" value={newInternship.duration} onChange={handleChange} />
            <select name="type" value={newInternship.type} onChange={handleChange}>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            <input type="text" name="applyLink" placeholder="Application Link" value={newInternship.applyLink} onChange={handleChange} />
            <button className="submit-btn" onClick={handleAddInternship}>🚀 Add Internship</button>
            <button className="close-btn" onClick={() => setShowForm(false)}>❌ Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipBoard;


