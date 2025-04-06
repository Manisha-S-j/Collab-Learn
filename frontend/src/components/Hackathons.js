
import React, { useState } from "react";
import "./Hackathons.css";

const hackathonsData = [
  {
    id: 1,
    name: "CodeStorm Hackathon",
    organizer: "Google Developers",
    startDate: "April 5, 2025",
    endDate: "April 10, 2025",
    eligibility: "Open to all students",
    prizePool: "$10,000",
    status: "ongoing",
  },
  {
    id: 2,
    name: "AI Innovators Challenge",
    organizer: "Microsoft AI Labs",
    startDate: "April 15, 2025",
    endDate: "April 20, 2025",
    eligibility: "University students only",
    prizePool: "$5,000",
    status: "current",
  },
  {
    id: 3,
    name: "Blockchain Revolution",
    organizer: "Ethereum Foundation",
    startDate: "March 10, 2025",
    endDate: "March 15, 2025",
    eligibility: "Open to professionals & students",
    prizePool: "$15,000",
    status: "completed",
  },
];

const Hackathons = () => {
  const [filter, setFilter] = useState("ongoing");

  const filteredHackathons = hackathonsData.filter(
    (hackathon) => hackathon.status === filter
  );

  return (
    <div className="hackathons-container">
      <h2>🚀 Explore Hackathons</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button
          className={filter === "ongoing" ? "active" : ""}
          onClick={() => setFilter("ongoing")}
        >
          Ongoing
        </button>
        <button
          className={filter === "current" ? "active" : ""}
          onClick={() => setFilter("current")}
        >
          Upcoming
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      {/* Hackathons List */}
      <div className="hackathons-list">
        {filteredHackathons.length > 0 ? (
          filteredHackathons.map((hackathon) => (
            <div key={hackathon.id} className="hackathon-card">
              <h3>{hackathon.name}</h3>
              <p><strong>Organizer:</strong> {hackathon.organizer}</p>
              <p><strong>📅 Dates:</strong> {hackathon.startDate} - {hackathon.endDate}</p>
              <p><strong>🎓 Eligibility:</strong> {hackathon.eligibility}</p>
              <p><strong>💰 Prize Pool:</strong> {hackathon.prizePool}</p>
              <span className={`status-tag ${hackathon.status}`}>
                {hackathon.status.charAt(0).toUpperCase() + hackathon.status.slice(1)}
              </span>
              {hackathon.status !== "completed" && (
                <button className="register-btn">Register</button>
              )}
            </div>
          ))
        ) : (
          <p className="no-hackathons">No hackathons available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Hackathons;
