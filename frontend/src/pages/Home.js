import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback: "CollabHub helped me land my first internship! The projects and mentors here are invaluable. 🚀",
      role: "Software Engineering Intern @ Google",
    },
    {
      id: 2,
      name: "Bob Smith",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      feedback: "The hackathons here prepared me for real-world coding challenges. I even won a prize! 🏆",
      role: "Full Stack Developer @ Microsoft",
    },
    {
      id: 3,
      name: "Charlie Lee",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
      feedback: "The coding challenges & discussion forums boosted my DSA skills. Now I'm in the top 5% at LeetCode!",
      role: "Competitive Programmer @ Codeforces",
    },
  ];
  
  const stats = [
    { id: 1, label: "Active Users", value: "25,000+", icon: "👥" },
    { id: 2, label: "Projects Completed", value: "10,000+", icon: "🚀" },
    { id: 3, label: "Hackathons Hosted", value: "200+", icon: "🏆" },
    { id: 4, label: "Internship Listings", value: "5,000+", icon: "💼" },
  ];


const Home = () => {

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000); // Change testimonial every 4 seconds
      return () => clearInterval(interval);
    }, []);


  return (
    <div className="home-container">
      {/* 🌟 Hero Section */}
      <header className="hero-section">
        <h1>🚀 CollabHub: Your Student Collaboration Space</h1>
        <p>
          Connect, collaborate, and grow with fellow students!  
          Work on projects, participate in hackathons, apply for internships,  
          and engage with the community.
        </p>
        <div className="cta-buttons">
          <Link to="/signup" className="btn primary-btn">Get Started</Link>
          <Link to="/login" className="btn secondary-btn">Login</Link>
        </div>
      </header>

      {/* 🔥 Features Overview */}
      <section className="features-section">
        <h2>🌟 Why Join CollabHub?</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>📌 Project Collaboration</h3>
            <p>Work with peers, find teammates, and build great projects.</p>
          </div>
          <div className="feature-item">
            <h3>🏆 Hackathons & Coding Challenges</h3>
            <p>Compete, learn, and win prizes in top coding events.</p>
          </div>
          <div className="feature-item">
            <h3>💼 Internship & Placement Board</h3>
            <p>Discover career opportunities tailored for students.</p>
          </div>
          <div className="feature-item">
            <h3>🗣️ Discussion Forums & Community</h3>
            <p>Ask questions, share knowledge, and connect with peers.</p>
          </div>
          <div className="feature-item">
            <h3>🤖 AI Chatbot Assistance</h3>
            <p>Get instant help and insights with our smart chatbot.</p>
          </div>
        </div>
      </section>

      {/* 🌟 Testimonials Section */}
      <section className="testimonials">
        <h2>🚀 Hear from Our Community</h2>
        <div className="testimonial-card">
          <img src={testimonials[currentTestimonial].avatar} alt="User Avatar" className="testimonial-avatar" />
          <p className="testimonial-feedback">"{testimonials[currentTestimonial].feedback}"</p>
          <h4 className="testimonial-name">{testimonials[currentTestimonial].name}</h4>
          <p className="testimonial-role">{testimonials[currentTestimonial].role}</p>
        </div>
      </section>

        {/* 📊 Stats Section */}
        <section className="stats-section">
        <h2>🌍 Our Impact in Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <span className="stat-icon">{stat.icon}</span>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌍 Footer */}
      <footer>
        <p>© 2025 CollabHub. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
