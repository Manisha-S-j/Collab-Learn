require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const chatbotRoutes = require("./routes/chatbotRoutes");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/chatbot", chatbotRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));


app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.get("/api/test", (req, res) => {
    res.json({ message: "✅ Frontend successfully connected to Backend!" });
});

const users = [
    { id: "1", name: "John Doe", email: "john@example.com", bio: "Software Engineer" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", bio: "Data Scientist" }
];

// API Route
app.get("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
});

// console.log("API Key:", GEMINI_API_KEY);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
