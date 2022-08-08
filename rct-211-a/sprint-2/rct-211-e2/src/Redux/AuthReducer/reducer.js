// NOTE: DO NOT MODIFY the intial state structure in this file.

import * as types from "./actionTypes"

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,action) => {

  const {type,payload} = action

  return state;
};

export { reducer };
