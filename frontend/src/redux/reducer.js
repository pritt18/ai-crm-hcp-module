const initialState = {
  formData: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload   // ✅ merge (important)
        }
      };
    default:
      return state;
  }
}