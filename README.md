# 🧠 AI-First CRM HCP Module – Log Interaction Screen

## 📌 Overview

This project is an **AI-powered CRM module** designed for Healthcare Professionals (HCP).
It allows users to log interactions using a **conversational AI assistant** instead of manually filling forms.

The system automatically extracts structured data (HCP name, sentiment, topics, etc.) from natural language input using **LLMs and LangGraph**.

---

## 🚀 Features

* 🤖 AI Chat-based interaction logging
* 📋 Auto-fill form from natural language
* ✏️ Edit interaction using chat (no manual form editing)
* 🧠 LLM-based entity extraction & summarization
* 🔄 Real-time UI update using Redux
* ⚡ FastAPI backend with LangGraph agent

---

## 🧰 Tech Stack

### Frontend

* React.js
* Redux (State Management)
* Axios

### Backend

* Python (FastAPI)
* LangGraph (AI Agent Framework)
* Groq LLM API

### Database

* SQLite (or MySQL/Postgres ready)

---

## 🧠 LangGraph AI Agent & Tools

The system uses a LangGraph agent to manage interactions.

### Implemented Tools:

1. **Log Interaction**

   * Extracts HCP name, date, sentiment, topics, materials
   * Auto-fills form using LLM output

2. **Edit Interaction**

   * Updates specific fields using chat input
   * Example: "Change sentiment to negative"

3. **Summarize Interaction**

   * Converts conversation into structured summary

4. **Suggest Follow-up**

   * Suggests next steps (meeting, reminder)

5. **Extract Entities**

   * Detects medical topics, sentiment, HCP automatically

---

## 🖥️ System Architecture

```
User Input → React Chat UI → FastAPI Backend → LangGraph Agent → LLM (Groq)
                                    ↓
                              Structured JSON
                                    ↓
                              Redux Store Update
                                    ↓
                              Form Auto-Filled
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/pritt18/ai-crm-hcp-module.git
cd ai-crm-hcp-module
```

---

### 2️⃣ Backend Setup

```
cd backend
python -m venv venv
venv\Scripts\activate

pip install fastapi uvicorn python-dotenv langchain langgraph

uvicorn main:app --reload
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside backend:

```
GROQ_API_KEY=your_api_key_here
```

⚠️ Do NOT push `.env` file to GitHub

---

## 🧪 Example Prompts

```
Today I met Dr. Sharma and discussed insulin. Sentiment was positive and I shared brochures.
```

```
Change sentiment to negative
```

```
Met Dr. Patel, discussed diabetes treatment, follow up next week.
```

---

## 🎥 Demo

👉 Demonstrates:

* AI filling form automatically
* Editing via chat
* Real-time updates

---

## 📌 Key Learnings

* AI-first UI design
* LangGraph agent architecture
* LLM-based structured data extraction
* Full-stack integration (React + FastAPI)

---

## 📎 Submission Details

* GitHub Repository: ✔
* Video Recording: ✔
* LangGraph Tools: ✔

---

## 👨‍💻 Author

**Pritam Gangurde**

* LinkedIn: https://www.linkedin.com/in/pritam-gangurde-b51528249
* GitHub: https://github.com/pritt18

---
