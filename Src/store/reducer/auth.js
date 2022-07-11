export const initialState = {
  token: null,
  loggedin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGED": {
      return {
        ...state,
        loggedin: true,
      };
    }
    case "SIGN_OUT": {
      return {
        ...state,
        loggedin: false,
        token: null,
      };
    }
   
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.token,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
