import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaComment, FaShare, FaFilter } from "react-icons/fa";
import "./ActivityFeed.css"; // Import new professional styles

const ActivityFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: "Alice Johnson", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
      type: "project",
      content: "🚀 Just launched my open-source project! Check it out on GitHub! #OpenSource",
      timeAgo: "2 hours ago",
      likes: 15,
      comments: ["Great work!", "Super helpful!"],
    },
    {
      id: 2,
      user: { name: "Bob Smith", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
      type: "hackathon",
      content: "🏆 Won 1st place in the AI Hackathon! 🎉 Excited to share my experience.",
      timeAgo: "5 hours ago",
      likes: 22,
      comments: ["Congratulations!", "Tell us about your project!"],
    },
    {
      id: 3,
      user: { name: "Charlie Lee", avatar: "https://randomuser.me/api/portraits/men/50.jpg" },
      type: "internship",
      content: "💼 Just landed an internship at Google! Excited for this journey!",
      timeAgo: "1 day ago",
      likes: 30,
      comments: ["Awesome!", "When do you start?"],
    },
  ]);
  
  const [filter, setFilter] = useState("all"); // Default: Show all posts

  useEffect(() => {
    // Simulated API Call
    axios.get("/api/activity-feed")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("❌ API Error:", err));
  }, []);

  // Function to filter posts
  const filteredPosts = filter === "all" ? posts : posts.filter(post => post.type === filter);

  return (
    <div className="activity-feed-container">
      <h2 className="feed-title">📢 Activity Feed</h2>

      {/* Filter Options */}
      <div className="activity-filters">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>📌 All</button>
        <button className={filter === "project" ? "active" : ""} onClick={() => setFilter("project")}>🚀 Projects</button>
        <button className={filter === "hackathon" ? "active" : ""} onClick={() => setFilter("hackathon")}>🏆 Hackathons</button>
        <button className={filter === "internship" ? "active" : ""} onClick={() => setFilter("internship")}>💼 Internships</button>
        <button className={filter === "coding" ? "active" : ""} onClick={() => setFilter("coding")}>⚡ Coding Challenges</button>
      </div>

      {/* Activity Feed List */}
      <div className="activity-feed">
        {filteredPosts.map((post) => (
          <div key={post.id} className="activity-card">
            {/* Post Header */}
            <div className="activity-header">
              <img src={post.user.avatar} alt="User Avatar" className="activity-avatar" />
              <div>
                <h4>{post.user.name}</h4>
                <p className="timestamp">{post.timeAgo}</p>
              </div>
            </div>

            {/* Post Content */}
            <p className="activity-content">{post.content}</p>

            {/* Reaction Buttons */}
            <div className="activity-actions">
              <button className="like-btn">
                <FaHeart /> {post.likes}
              </button>
              <button className="comment-btn">
                <FaComment /> {post.comments.length}
              </button>
              <button className="share-btn">
                <FaShare /> Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
