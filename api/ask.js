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
