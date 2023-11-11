const initialState = {
    users: []
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "add_user":
        return { ...state, users: [...state.users, action.payload] };
      default:
        return { ...state };
    }
  };
  export default reducer;
  