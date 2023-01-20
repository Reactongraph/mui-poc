const actions = {
  REQUEST_LOGIN: "REQUEST_LOGIN",
  RESPONSE_LOGIN: "RESPONSE_LOGIN",
  REQUEST_SIGNUP: "REQUEST_SIGNUP",

  resquestLogin: (data) => ({
    type: actions.REQUEST_LOGIN,
    payload: data,
  }),
  storeLoginResponse: (data) => ({
    type: actions.RESPONSE_LOGIN,
    payload: data,
  }),
  resquestSignUp: (data) => ({
    type: actions.REQUEST_SIGNUP,
    payload: data,
  }),
};

export default actions;
