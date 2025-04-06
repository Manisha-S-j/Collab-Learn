const express = require("express");
const axios = require("axios");
const router = express.Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

router.post("/", async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${GEMINI_API_KEY}`,
            {
                contents: [{ parts: [{ text: message }] }]
            }
        );

        // ✅ Check response structure before sending it back
        if (!response.data || !response.data.candidates || response.data.candidates.length === 0) {
            return res.status(500).json({ error: "Invalid response from Gemini API" });
        }

        res.json({ reply: response.data.candidates[0].content.parts[0].text });
    } catch (error) {
        console.error("❌ Error from Gemini API:");
        if (error.response) {
            console.error("🔹 Status:", error.response.status);
            console.error("🔹 Data:", JSON.stringify(error.response.data, null, 2));
        } else {
            console.error("🔹 Error Message:", error.message);
        }
        res.status(500).json({ error: "Failed to fetch response from Gemini API" });
    }
});

module.exports = router;
