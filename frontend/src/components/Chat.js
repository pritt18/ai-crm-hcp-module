import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText
      }
    ]);

    setInput("");

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/chat",
        {
          message: userText,
          existing_data: formData
        }
      );

      console.log("API RESPONSE:", res.data);

      // Update Redux store
      dispatch({
        type: "UPDATE_FORM",
        payload: res.data
      });

      // Format AI response
      let aiText = "";

      if (res.data.summary) {
        aiText = `📝 Summary:\n${res.data.summary}`;
      } else if (res.data.follow_up) {
        aiText = `📅 Follow-up Actions:\n${res.data.follow_up}`;
      } else if (res.data.entities) {
        aiText = `🔍 Extracted Entities:\n${res.data.entities}`;
      } else {
        aiText = `
HCP: ${res.data.hcp_name || ""}
Interaction: ${res.data.interaction_type || ""}
Topics: ${res.data.topics || ""}
Sentiment: ${res.data.sentiment || ""}
        `;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiText
        }
      ]);

    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Error connecting backend"
        }
      ]);
    }
  };

  return (
    <div className="chat-section">
      <div className="chat-header">
        🤖 AI Assistant
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "user"
                ? "user-message"
                : "ai-message"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Describe interaction..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}