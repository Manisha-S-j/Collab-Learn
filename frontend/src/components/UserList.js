import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./UserList.css";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [following, setFollowing] = useState({});

    useEffect(() => {
        // Simulated Users Data (Replace with API call in real-world)
        const demoUsers = [
            {
                id: "1",
                name: "Alice Johnson",
                avatar: "https://randomuser.me/api/portraits/women/1.jpg",
                lastSeen: "Online",
                xp: 1500,
            },
            {
                id: "2",
                name: "David Miller",
                avatar: "https://randomuser.me/api/portraits/men/2.jpg",
                lastSeen: "Last seen 10 min ago",
                xp: 2300,
            },
            {
                id: "3",
                name: "Sophia Carter",
                avatar: "https://randomuser.me/api/portraits/women/3.jpg",
                lastSeen: "Online",
                xp: 1200,
            },
            {
                id: "4",
                name: "John Doe",
                avatar: "https://randomuser.me/api/portraits/men/4.jpg",
                lastSeen: "Last seen 1 hour ago",
                xp: 3400,
            },
            {
                id: "5",
                name: "Emma Wilson",
                avatar: "https://randomuser.me/api/portraits/women/5.jpg",
                lastSeen: "Online",
                xp: 1800,
            },
        ];
        setUsers(demoUsers);
    }, []);

    // Filter users based on search input
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Follow/Unfollow Feature
    const toggleFollow = (userId) => {
        setFollowing((prev) => ({
            ...prev,
            [userId]: !prev[userId],
        }));
    };

    return (
        <div className="user-list-container">
            <h2>👥 Users</h2>

            {/* 🔍 Search Input: Wrapped inside a container */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="🔍 Search users..."
                    className="user-search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Users List */}
            <ul className="user-list">
                {filteredUsers.map((user) => (
                    <li key={user.id} className="user-item">
                        <img src={user.avatar} alt="User Avatar" className="user-avatar" />
                        <div className="user-info">
                            <p className="user-name">{user.name}</p>
                            <p className={`user-status ${user.lastSeen === "Online" ? "online" : "offline"}`}>
                                {user.lastSeen}
                            </p>
                            <p className="user-xp">⚡ XP: {user.xp}</p>
                        </div>
                        <button
                            className={following[user.id] ? "unfollow-btn" : "follow-btn"}
                            onClick={() => toggleFollow(user.id)}
                        >
                            {following[user.id] ? "Unfollow" : "Follow"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
