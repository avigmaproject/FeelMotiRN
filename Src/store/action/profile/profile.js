export const setProfile = (profile) => {
  return (dispatch) => {
    dispatch({ type: "SET_PROFILE", profile });
  };
};
