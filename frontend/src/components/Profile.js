
import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${userId}`);
        setUser(res.data);
      } catch (err) {
        console.error("❌ API Error:", err);
      }
    };
  
    fetchUser();
  }, [userId]);


  const handleFollow = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/follow`, { userId });
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error("❌ Error following user:", error);
    }
  };

  if (!user)
    return (
      <div className="profile-card loading">
        <p>⏳ Loading profile...</p>
      </div>
    );

  return (
    <div className="profile-card">
      {/* Profile Header */}
      <div className="profile-header">
        <img
          src={user?.avatar || "https://via.placeholder.com/100"}
          alt="User Avatar"
          className="profile-avatar"
        />
        <h2>{user?.name}</h2>
        <p className="profile-role">{user?.role || "Student"}</p>
      </div>

      {/* User Info */}
      <div className="profile-details">
        <p>📧 <strong>Email:</strong> {user?.email}</p>
        <p>📝 <strong>Bio:</strong> {user?.bio || "No bio available."}</p>
        <p>👥 <strong>Followers:</strong> {user?.followers?.length || 0}</p>
        <p>🚀 <strong>Following:</strong> {user?.following?.length || 0}</p>
      </div>

      {/* Follow Button */}
      <button
        className={isFollowing ? "unfollow-btn" : "follow-btn"}
        onClick={handleFollow}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>

      {/* Achievements Section (✅ Fixed JSX Structure) */}
      {user?.badges?.length > 0 ? (
        <div className="profile-badges">
          <h3>🏅 Achievements</h3>
          <div className="badge-list">
            {user.badges.map((badge, index) => (
              <span key={index} className="badge">{badge}</span>
            ))}
          </div>
        </div>
      ) : null}

      {/* Action Buttons */}
      <div className="profile-actions">
        <button className="edit-btn">✏️ Edit Profile</button>
        <button className="logout-btn">🚪 Logout</button>
      </div>
    </div>
  );
};

export default Profile;






