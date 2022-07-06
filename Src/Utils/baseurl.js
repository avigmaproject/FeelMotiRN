const BASE_URL = "http://apifeelmoti.ikaart.org/";

export const API = {
  LOGIN_API: BASE_URL + "/token",
  REGISTRATION_API: "http://apifeelmoti.ikaart.org/token",
  FORGOT_PASSWORD: BASE_URL + "/api/Instaapii/ForGotPassword",
  RESET_PASSWORD: BASE_URL + "/api/Instaapii/ChangePasswordByEmail",
  STORE_IMAGE_API: BASE_URL + "/api/Instaapii/UploadImages",
  GET_USER_POST: BASE_URL + "/api/Instaapii/GetUserPost",
  CREATE_UPDATE_USER_POST: BASE_URL + "/api/Instaapii/CreateUpdateUserPost",
  GET_USER_MASTER_DATA: BASE_URL + "/api/Instaapii/GetUserMasterData",
  UPDATE_PROFILE: BASE_URL + "/api/Instaapii/AddUserMasterData",
  CREATE_UPDATE_USER_FAVORITE: BASE_URL + "/api/Instaapii/CreateUpdateUserFavorite",
};
