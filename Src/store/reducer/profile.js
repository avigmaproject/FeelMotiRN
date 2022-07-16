export const initialState = {
  profile: [],
  pagecount:1,
  showmenu:false
};

const reducer = (state = initialState, action) => {
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
    case "SET_PAGECOUNT": {
      return {
        ...state,
        pagecount: action.pagecount,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
