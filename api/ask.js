// import "dotenv/config";
// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Only POST requests allowed" });
//   }

//   const { prompt } = req.body;
//   if (!prompt || !prompt.trim()) {
//     return res.status(400).json({ reply: "Prompt is required." });
//   }

//   try {
//     const response = await fetch(
//   `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
//   {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       contents: [{ parts: [{ text: prompt }] }],
//     }),
//   }
// );


//     const data = await response.json();
//     console.log("Gemini API raw response:", JSON.stringify(data, null, 2));

//     const reply =
//       data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       data?.output_text ||
//       "No reply from Gemini.";

//     return res.status(200).json({ reply });
//   } catch (err) {
//     console.error("Gemini API error:", err);
//     return res.status(500).json({ reply: "Error: Could not reach Gemini." });
//   }
// }

import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = req.body.prompt;
    const result = await model.generateContent(prompt);

    let replyText = "";

    if (result.response && typeof result.response.text === "function") {
      replyText = result.response.text();
    } else if (result.response?.candidates?.[0]?.content?.parts?.[0]?.text) {
      replyText = result.response.candidates[0].content.parts[0].text;
    } else {
      replyText = "Gemini didn’t return any text.";
    }

    res.status(200).json({ reply: replyText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
