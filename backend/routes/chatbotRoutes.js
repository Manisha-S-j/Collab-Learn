
const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error("❌ ERROR: Gemini API key is missing. Check your .env file.");
}

router.post("/", async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        console.log("🔹 Sending request to Gemini API with message:", message);

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        role: "user",
                        parts: [{ text: message }]
                    }
                ]
            },
            {
                headers: { "Content-Type": "application/json" }
            }
        );

        console.log("✅ Gemini API Full Response:", JSON.stringify(response.data, null, 2));

        const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No reply found";
        
        res.json({ reply });

    } catch (error) {
        console.error("❌ Error from Gemini API:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch response from Gemini API", details: error.response?.data });
    }
});

module.exports = router;
