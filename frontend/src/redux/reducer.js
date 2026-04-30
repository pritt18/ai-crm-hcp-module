const initialState = {
  formData: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        formData: action.payload
      };
    default:
      return state;
  }
}