from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from agent.graph import run_agent
import json

app = FastAPI()

# ✅ CORS (important)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
def chat(data: dict):
    result = run_agent(data)

    print("LLM RAW OUTPUT:", result)

    # ✅ clean markdown
    cleaned = result.replace("```json", "").replace("```", "").strip()

    try:
        return json.loads(cleaned)
    except:
        return {"error": "Invalid JSON", "raw_output": cleaned}