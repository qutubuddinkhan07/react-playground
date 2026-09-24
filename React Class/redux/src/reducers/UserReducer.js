let initialState = {
  name: "Smith",
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, name: action.payload };
    default:
      return initialState;
  }
}
