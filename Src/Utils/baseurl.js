const BASE_URL = 'http://apifeelmoti.ikaart.org/';

export const API = {
  LOGIN_API: BASE_URL + '/token',
  REGISTRATION_API: "http://apifeelmoti.ikaart.org/token",
  FORGOT_PASSWORD: BASE_URL + '/api/Instaapii/ForGotPassword',
  RESET_PASSWORD: BASE_URL + '/api/Instaapii/ChangePasswordByEmail',
  STORE_IMAGE_API: BASE_URL + '/api/Instaapii/UploadImages',
  GET_USER_POST: BASE_URL + '/api/Instaapii/GetUserPost',
  VERIFY_USER_BY_EMAIL: BASE_URL + '/api/Instaapii/VerifyUserByEmail',
};
