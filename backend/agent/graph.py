from langgraph.graph import StateGraph
from agent.tools import (
    log_interaction_tool,
    edit_interaction_tool,
    summarize_tool,
    followup_tool,
    extract_entities_tool,
)

def agent_node(state):
    user_input = state["message"]
    existing = state.get("existing_data", {})

    text = user_input.lower()

    print("ROUTING INPUT:", text)

    # ✏️ Edit Tool
    if any(word in text for word in ["edit", "change", "update", "modify"]):
        return {"output": edit_interaction_tool(existing, user_input)}

    # 📝 Summarize Tool
    elif "summarize" in text:
        return {"output": summarize_tool(existing)}

    # 📅 Follow-up Tool
    elif "follow" in text:
        return {"output": followup_tool(existing)}

    # 🔍 Extract Entities Tool
    elif "extract" in text:
        return {"output": extract_entities_tool(existing)}

    # 🧠 Default → Log Interaction
    else:
        return {"output": log_interaction_tool(user_input)}


# ✅ Build LangGraph
builder = StateGraph(dict)

builder.add_node("agent", agent_node)
builder.set_entry_point("agent")

graph = builder.compile()


# ✅ Run agent
def run_agent(state):
    result = graph.invoke(state)
    return result["output"]