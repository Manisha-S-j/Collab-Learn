
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


