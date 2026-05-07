from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from agent.graph import run_agent
import json

app = FastAPI()

# ✅ Enable CORS (important for React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AI CRM Backend Running"}

@app.post("/chat")
def chat(data: dict):
    try:
        print("\n--- NEW REQUEST ---")
        print("User Input:", data)

        result = run_agent(data)

        print("RAW AGENT OUTPUT:", result)

        # ✅ If already dict → return directly
        if isinstance(result, dict):
            return result

        # ✅ If string → try to parse JSON
        if isinstance(result, str):
            cleaned = result.replace("```json", "").replace("```", "").strip()
            try:
                return json.loads(cleaned)
            except:
                return {
                    "error": "Invalid JSON from LLM",
                    "raw_output": cleaned
                }

        # Fallback
        return {
            "error": "Unexpected response format",
            "raw_output": str(result)
        }

    except Exception as e:
        print("SERVER ERROR:", str(e))
        return {
            "error": "Server error",
            "details": str(e)
        }