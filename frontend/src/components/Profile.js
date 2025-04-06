// import React, { useState } from "react";
// import "./Dashboard.css";

// const Profile = () => {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <aside className="profile">
//       <div className="profile-card">
//         {/* Profile Picture Upload */}
//         <label htmlFor="file-upload" className="avatar">
//           {image ? (
//             <img src={image} alt="Profile" />
//           ) : (
//             <span>📷 Upload</span>
//           )}
//         </label>
//         <input type="file" id="file-upload" accept="image/*" onChange={handleImageChange} />

//         <h3>👤 John Doe</h3>
//         <p>💻 Full-Stack Developer</p>

//         {/* Social Links */}
//         <div className="social-links">
//           <a href="https://github.com/" target="_blank">🐙 GitHub</a>
//           <a href="https://linkedin.com/" target="_blank">🔗 LinkedIn</a>
//           <a href="mailto:john.doe@example.com">📧 Email</a>
//         </div>

//         <button className="edit-btn">Edit Profile</button>
//       </div>
//     </aside>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Profile = ({ userId }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (!userId) return;

//     axios
//       .get(`/api/users/${userId}`)
//       .then((res) => setUser(res.data))
//       .catch((err) => console.error("❌ API Error:", err));
//   }, [userId]);

//   if (!user)
//     return (
//       <div className="profile-card loading">
//         <p>⏳ Loading profile...</p>
//       </div>
//     );

//   return (
//     <div className="profile-card">
//       {/* Profile Image */}
//       <div className="profile-header">
//         <img
//           src={user?.avatar || "https://via.placeholder.com/100"}
//           alt="User Avatar"
//           className="profile-avatar"
//         />
//         <h2>{user?.name}</h2>
//         <p className="profile-role">{user?.role || "Student"}</p>
//       </div>

//       {/* User Info */}
//       <div className="profile-details">
//         <p>📧 <strong>Email:</strong> {user?.email}</p>
//         <p>📝 <strong>Bio:</strong> {user?.bio || "No bio available."}</p>
//       </div>

//       {/* Profile Completion Bar */}
//       <div className="progress-container">
//         <div className="progress-bar">
//           <div className="progress-fill" style={{ width: "80%" }}></div>
//         </div>
//         <p className="progress-text">Profile 80% Complete</p>
//       </div>

//       {/* Action Buttons */}
//       <div className="profile-actions">
//         <button className="edit-btn">✏️ Edit Profile</button>
//         <button className="logout-btn">🚪 Logout</button>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (!userId) return;

    axios
      .get(`/api/users/${userId}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("❌ API Error:", err));
  }, [userId]);

  const handleFollow = async () => {
    try {
      await axios.post(`/api/follow`, { userId });
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






