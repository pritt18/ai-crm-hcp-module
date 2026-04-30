import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def call_llm(prompt):
    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"ERROR: {str(e)}"


# TOOL 1: Log Interaction
def log_interaction_tool(text):
    prompt = f"""
    Extract CRM interaction details in STRICT JSON:

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

    Return ONLY JSON.
    """
    return call_llm(prompt)


# TOOL 2: Edit Interaction
def edit_interaction_tool(existing, instruction):
    prompt = f"""
    You are updating CRM interaction data.

    Existing data:
    {existing}

    User instruction:
    {instruction}

    Update ONLY the fields mentioned.

    Return JSON in this format:
    {{
      "hcp_name": "",
      "date": "",
      "sentiment": "",
      "topics": ""
    }}

    Return ONLY JSON.
    """
    return call_llm(prompt)


# Extra tools (required for assignment)
def summarize_tool(text):
    return call_llm(f"Summarize: {text}")

def followup_tool(text):
    return call_llm(f"Suggest follow-up: {text}")

def material_tool(text):
    return call_llm(f"Extract materials: {text}")

