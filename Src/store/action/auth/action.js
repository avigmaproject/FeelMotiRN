export const setToken = (token) => {
  console.log("tokentoken", token);
  return (dispatch) => {
    dispatch({ type: "SET_TOKEN", token: token });
  };
};

export const signout = () => {
  return (dispatch) => {
    dispatch({ type: "SIGN_OUT" });
  };
};

export const setLoggedIn = () => {
  return (dispatch) => {
    dispatch({
      type: "SET_LOGGED",
    });
  };
};


