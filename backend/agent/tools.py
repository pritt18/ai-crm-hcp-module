import os
import json
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

#print("API KEY:", os.getenv("GROQ_API_KEY"))

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# ---------------- HELPERS ---------------- #

def safe_json(content):
    cleaned = content.replace("```json", "").replace("```", "").strip()
    try:
        return json.loads(cleaned)
    except:
        return None


def call_llm_json(prompt):
    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}]
        )

        content = response.choices[0].message.content
        print("RAW JSON:", content)

        parsed = safe_json(content)

        if parsed:
            return parsed
        else:
            return {"error": "Invalid JSON", "raw": content}

    except Exception as e:
        print("LLM ERROR:", str(e))
        return {"error": str(e)}


def call_llm_text(prompt):
    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}]
        )

        content = response.choices[0].message.content
        print("RAW TEXT:", content)

        return content.strip()

    except Exception as e:
        print("LLM ERROR:", str(e))
        return f"ERROR: {str(e)}"


# ---------------- TOOLS ---------------- #

def log_interaction_tool(text):
    prompt = f"""
Return ONLY valid JSON.

{{
  "hcp_name": "",
  "interaction_type": "",
  "date": "",
  "time": "",
  "attendees": "",
  "topics": "",
  "materials_shared": "",
  "samples": "",
  "sentiment": "",
  "outcomes": "",
  "follow_up": ""
}}

Text: {text}
"""
    return call_llm_json(prompt)


def edit_interaction_tool(existing, instruction):
    prompt = f"""
Update ONLY mentioned fields.

Existing:
{existing}

Instruction:
{instruction}

Return ONLY JSON:
{{
  "hcp_name": "",
  "date": "",
  "sentiment": "",
  "topics": "",
  "follow_up": ""
}}
"""
    return call_llm_json(prompt)


def summarize_tool(existing):
    return {
        "summary": call_llm_text(f"Summarize this interaction: {existing}")
    }


def followup_tool(existing):
    return {
        "follow_up": call_llm_text(f"Suggest follow-up actions: {existing}")
    }


def extract_entities_tool(existing):
    return {
        "entities": call_llm_text(f"Extract doctor name, disease, sentiment: {existing}")
    }