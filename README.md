# 🧠 AI-First CRM HCP Module – Log Interaction Screen

## 📌 Overview

This project is an **AI-powered CRM module** designed for Healthcare Professionals (HCPs).  
It enables users to log interactions using a **conversational AI assistant** instead of manually filling forms.

The system uses **LangGraph + Groq LLM** to extract structured information such as:
- HCP Name
- Interaction Type
- Topics Discussed
- Sentiment
- Materials Shared
- Follow-up Actions

⚠️ The interaction form is fully AI-controlled.  
Users do not manually edit the form. All updates are performed through LangGraph tools powered by Groq LLM.

This project follows an **AI-first workflow** where the conversational assistant controls the structured CRM form using LangGraph and LLM-based tools.

---

# 🚀 Features

- 🤖 AI chat-based interaction logging
- 📋 Automatic form filling from natural language
- ✏️ Edit interaction using conversational commands
- 🧠 LLM-powered summarization & entity extraction
- 🔄 Real-time form updates using Redux
- ⚡ FastAPI backend with LangGraph routing
- 🎨 Modern CRM-style responsive UI
- 💬 Conversational AI assistant panel

---

# 🧰 Tech Stack

## Frontend
- React.js
- Redux
- Axios
- CSS3 (Modern CRM UI)

## Backend
- Python
- FastAPI
- LangGraph
- Groq API (`llama-3.3-70b-versatile`)

## Database
- SQLite
- SQLAlchemy ORM

---

# 🧠 LangGraph AI Agent & Tools

The application uses a **LangGraph agent** to dynamically route user requests to different AI tools based on intent detection.

The LangGraph agent manages:
- interaction logging
- editing
- summarization
- follow-up recommendations
- entity extraction

---

# 🔧 Implemented LangGraph Tools

## 1️⃣ Log Interaction Tool

Extracts:
- HCP Name
- Interaction Type
- Topics
- Sentiment
- Materials Shared
- Follow-up

The extracted data is automatically used to populate the CRM form.

### Example:
```text
Today I met Dr. Sharma regarding diabetes treatment.
The sentiment was positive and I shared brochures.
```

---

## 2️⃣ Edit Interaction Tool

Updates specific fields through conversational instructions.

### Example:
```text
Change sentiment to negative
```

Only the requested fields are updated while preserving existing data.

---

## 3️⃣ Summarize Interaction Tool

Generates a concise AI-generated summary of the interaction.

### Example:
```text
Summarize interaction
```

---

## 4️⃣ Suggest Follow-up Tool

Generates recommended next actions for the sales representative.

### Example:
```text
Suggest follow up
```

---

## 5️⃣ Extract Entities Tool

Extracts:
- doctor names
- diseases
- sentiment
- medical entities

### Example:
```text
Extract entities
```

---

# 🖥️ System Architecture

```text
User Input
   ↓
React Chat UI
   ↓
FastAPI Backend
   ↓
LangGraph Agent
   ↓
Groq LLM
   ↓
Structured JSON Output
   ↓
Redux Store Update
   ↓
CRM Form Auto-Filled
```

---

# 📸 UI Screenshots

## CRM Interaction Screen

(Add Screenshot Here)

## AI Assistant Chat

(Add Screenshot Here)

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/pritt18/ai-crm-hcp-module.git
cd ai-crm-hcp-module
```

---

# 🔙 Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate
```

Install dependencies:

```bash
pip install fastapi uvicorn python-dotenv langgraph groq sqlalchemy
```

Run backend server:

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

# 🎨 Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# 🔐 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
GROQ_API_KEY=your_api_key_here
```

⚠️ Never upload `.env` to GitHub.

---

# 🧪 Example Prompts

## Log Interaction

```text
Today I met Dr. Sharma and discussed insulin therapy.
The sentiment was positive and I shared brochures.
```

---

## Edit Interaction

```text
Change sentiment to negative
```

---

## Summarize Interaction

```text
Summarize interaction
```

---

## Suggest Follow-up

```text
Suggest follow up
```

---

## Extract Entities

```text
Extract entities
```

---

# 🎥 Demo Video

The demo video demonstrates:
- AI-driven form filling
- LangGraph tool routing
- Conversational editing
- Redux state updates
- Follow-up recommendations
- Entity extraction
- Full CRM workflow

---

# 📚 Key Learnings

- AI-first CRM workflow design
- LangGraph agent architecture
- LLM-powered structured data extraction
- React + Redux state management
- FastAPI backend integration
- Conversational UI design
- Full-stack AI application development

---

# 📎 Submission Checklist

- ✅ Frontend completed
- ✅ Backend completed
- ✅ LangGraph implemented
- ✅ 5 AI tools implemented
- ✅ Groq LLM integrated
- ✅ Redux state management
- ✅ GitHub repository uploaded
- ✅ Demo video recorded

---

# 👨‍💻 Author

## Pritam Gangurde

- LinkedIn: https://www.linkedin.com/in/pritam-gangurde-b51528249
- GitHub: https://github.com/pritt18

---
