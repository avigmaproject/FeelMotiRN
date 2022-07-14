export const setProfile = (profile) => {
  return (dispatch) => {
    dispatch({ type: "SET_PROFILE", profile });
  };
};
export const setMenu = (showmenu) => {
  return (dispatch) => {
    dispatch({ type: "SET_MENU", showmenu });
  };
};
 