const INITIAL_STATE = {
  search: ""
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};
