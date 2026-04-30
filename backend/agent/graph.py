from agent.tools import *

def run_agent(state):
    user_input = state["message"]
    existing = state.get("existing_data", {})

    if "change" in user_input.lower() or "edit" in user_input.lower():
        return edit_interaction_tool(existing, user_input)
    else:
        return log_interaction_tool(user_input)