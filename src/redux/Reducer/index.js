import actions from "../Actions";

const initialState = {
  loginData: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RESPONSE_LOGIN:
      return { ...state, loginData: action.payload };
    default:
      return { ...state };
  }
};

export default Reducer;
