import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";
import { FaRobot, FaTimes } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "👋 Hi! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Toggle chatbot visibility

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/chatbot", {
        message: input
      });

      const botMessage = {
        text: response.data.reply || "Sorry, I couldn't understand that.",
        sender: "bot"
      };

      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages([
        ...messages,
        userMessage,
        { text: "❌ Error connecting to AI", sender: "bot" }
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* ✅ Floating Chatbot Button */}
      <button className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        <FaRobot />
      </button>

      {/* ✅ Chatbot Popup (Only visible when isOpen is true) */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>💬 AI Chatbot</span>
            <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && <p className="loading">Bot is typing...</p>}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} disabled={loading}>
              {loading ? "⏳" : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
