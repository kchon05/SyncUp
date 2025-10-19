import { useState, useRef, useEffect } from "react";
import mockData from "../data/mock-data.json";
import { marked } from "marked";

export function AskAIPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi! I'm your personal AI, here to help you Sync with others for your next project!" },
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const askGemini = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setInput("");

    try {
        const res = await fetch("/api/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                prompt: `
                    You are SyncUp AI, a friendly, conversational assistant for a teammate matching website.

                    You can chat normally with users about anything. 
                    If the user specifically mentions finding teammates, skills, or matching people, 
                    then switch into "teammate matching" mode.

                    In teammate matching mode, you'll use the following data (in JSON format) to recommend people by name, 
                    and respond naturally. Don't repeat the same generic intro each time. 
                    If no match fits well, kindly explain why and suggest related people.

                    Here's the data:
                    ${JSON.stringify(mockData)}

                    User message: ${userMessage.text}`,
            }),
        });
          

      const data = await res.json();
      const aiMessage = { sender: "ai", text: data.reply || "No reply from Gemini." };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      setMessages((prev) => [...prev, { sender: "ai", text: "Error: Could not reach Gemini." }]);
    }

    setLoading(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="askai-container">
      <h1 className="askai-title">Ask AI</h1>

      <div className="chat-box">
        {messages.map((msg, index) => (
            <div
                key={index}
                className={`bubble ${msg.sender}`}
                dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }}
            />
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="input-bar">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message"
          onKeyDown={(e) => e.key === "Enter" && askGemini()}
        />
        <button onClick={askGemini} disabled={loading}>
          {loading ? "..." : "➤"}
        </button>
      </div>
    </div>
  );
}

