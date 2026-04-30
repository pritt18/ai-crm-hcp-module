import React from "react";
import { useSelector } from "react-redux";

export default function Form() {
  const data = useSelector((state) => state.formData);

  return (
    <div style={{
      width: "65%",
      padding: "20px",
      background: "#f9fafb",
      borderRight: "1px solid #ddd",
      height: "100vh",
      overflowY: "auto"
    }}>
      <h2 style={{ marginBottom: "20px" }}>Log HCP Interaction</h2>

      {/* Interaction Details */}
      <h4>Interaction Details</h4>

      <label>HCP Name</label>
      <input value={data?.hcp_name || ""} readOnly />

      <label>Interaction Type</label>
      <input value={data?.interaction_type || ""} readOnly />

      <label>Date</label>
      <input value={data?.date || ""} readOnly />

      <label>Time</label>
      <input value={data?.time || ""} readOnly />

      <label>Attendees</label>
      <input value={data?.attendees || ""} readOnly placeholder="Enter names or search..." />

      {/* Topics */}
      <label style={{ marginTop: "15px" }}>Topics Discussed</label>
      <textarea value={data?.topics || ""} readOnly />

      <p style={{
        color: "#2563eb",
        cursor: "pointer",
        fontSize: "14px",
        marginTop: "5px"
      }}>
        🎤 Summarize from Voice Note (Requires Consent)
      </p>

      {/* Materials Section */}
      <h4 style={{ marginTop: "20px" }}>
        Materials Shared / Samples Distributed
      </h4>

      <label>Materials Shared</label>
      <div style={{ display: "flex", gap: "10px" }}>
        <input value={data?.materials_shared || ""} readOnly />
        <button style={{
          padding: "6px 10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: "#fff",
          cursor: "pointer"
        }}>
          🔍 Search/Add
        </button>
      </div>

      <label style={{ marginTop: "10px" }}>Samples Distributed</label>
      <div style={{ display: "flex", gap: "10px" }}>
        <input value={data?.samples || ""} readOnly />
        <button style={{
          padding: "6px 10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: "#fff",
          cursor: "pointer"
        }}>
          + Add Sample
        </button>
      </div>

      {/* Sentiment */}
      <h4 style={{ marginTop: "20px" }}>
        Observed/Inferred HCP Sentiment
      </h4>

      <div style={{ marginTop: "5px" }}>
        <label style={{ marginRight: "10px" }}>
          <input
            type="radio"
            checked={data?.sentiment === "positive"}
            readOnly
          /> 😊 Positive
        </label>

        <label style={{ marginRight: "10px" }}>
          <input
            type="radio"
            checked={data?.sentiment === "neutral"}
            readOnly
          /> 😐 Neutral
        </label>

        <label>
          <input
            type="radio"
            checked={data?.sentiment === "negative"}
            readOnly
          /> 😡 Negative
        </label>
      </div>

      {/* Outcomes */}
      <label style={{ marginTop: "15px" }}>Outcomes</label>
      <textarea
        value={data?.outcomes || ""}
        readOnly
        placeholder="Key outcomes or agreements..."
      />

      {/* Follow-up */}
      <label style={{ marginTop: "15px" }}>Follow-up Actions</label>
      <textarea
        value={data?.follow_up || ""}
        readOnly
      />

      {/* Styling */}
      <style>{`
        label {
          display: block;
          font-weight: 600;
          margin-top: 10px;
        }

        input, textarea {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
          background: #fff;
        }

        textarea {
          min-height: 70px;
        }

        h4 {
          margin-top: 15px;
          margin-bottom: 5px;
          color: #333;
        }
      `}</style>
    </div>
  );
}