export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { prompt } = req.body;
  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ reply: "Prompt is required." });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Minimal Gemini request body
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }]}],
        }),
      }
    );

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No reply from Gemini.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Gemini API error:", err);
    return res.status(500).json({ reply: "Error: Could not reach Gemini." });
  }
}
