import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { type: "user", text: input }
    ]);

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/chat", {
        message: input,
        existing_data: formData
      });

      // Update form
      dispatch({
        type: "UPDATE_FORM",
        payload: res.data
      });

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "✔ Interaction logged successfully! The details (HCP Name, Date, Sentiment, and Materials) have been automatically populated. Would you like me to suggest a follow-up action?"
        }
      ]);

      setInput("");
    } catch (error) {
      console.error("ERROR:", error);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        width: "35%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        borderLeft: "1px solid #ddd"
      }}
    >
      {/* Header */}
      <div style={{ padding: "15px" }}>
        <h3>🤖 AI Assistant</h3>
        <p style={{ color: "gray", fontSize: "14px" }}>
          Log interaction details here via chat
        </p>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "15px"
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "8px",
              background:
                msg.type === "user" ? "#e0f2fe" : "#dcfce7",
              textAlign: msg.type === "user" ? "right" : "left"
            }}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div style={{ color: "gray" }}>
            AI is thinking...
          </div>
        )}
      </div>

      {/* Bottom Input */}
      <div
        style={{
          padding: "10px",
          borderTop: "1px solid #ddd",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          background: "#fff"
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe interaction..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "20px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px 16px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}