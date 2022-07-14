export const initialState = {
  profile: [],
};

const reducer = (state = initialState, action) => {
  console.log("===========>", action.profile);
  switch (action.type) {
    case "SET_PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }
  case "SET_MENU": {
      return {
        ...state,
        showmenu: action.showmenu,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
