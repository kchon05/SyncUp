import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

app.post("/api/ask", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const result = await model.generateContent(prompt);

    let replyText = "";
    if (result.response && typeof result.response.text === "function") {
      replyText = result.response.text();
    } else if (result.response?.candidates?.[0]?.content?.parts?.[0]?.text) {
      replyText = result.response.candidates[0].content.parts[0].text;
    } else {
      replyText = "Gemini didn't return any text.";
    }

    res.json({ reply: replyText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(8787, () =>
  console.log("Gemini server running on http://localhost:8787")
);
