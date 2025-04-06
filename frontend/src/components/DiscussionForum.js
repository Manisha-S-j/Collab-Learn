import React, { useState } from "react";
import "./DiscussionForum.css";
import { FaPaperPlane } from "react-icons/fa";

const DiscussionForum = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "Alice", topic: "Best resources for DSA?", replies: 2 },
    { id: 2, user: "Bob", topic: "How to prepare for coding interviews?", replies: 5 },
  ]);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() !== "") {
      const newEntry = { id: posts.length + 1, user: "You", topic: newPost, replies: 0 };
      setPosts([newEntry, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div className="discussion-container">
      <h2>💬 Discussion Forum</h2>
      
      {/* Input for new discussion */}
      <div className="post-input">
        <input
          type="text"
          placeholder="Start a discussion..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handlePost}>
          <FaPaperPlane /> Post
        </button>
      </div>

      {/* List of discussions */}
      <ul className="discussion-list">
        {posts.map((post) => (
          <li key={post.id}>
            <span className="user">{post.user}</span>: <strong>{post.topic}</strong>
            <span className="replies">{post.replies} replies</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionForum;
