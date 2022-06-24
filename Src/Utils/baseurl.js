const BASE_URL = 'http://apifeelmoti.ikaart.org/';

export const API = {
  LOGIN_API: BASE_URL + '/token',
  REGISTRATION_API: "http://apifeelmoti.ikaart.org/token",
  FORGOT_PASSWORD: BASE_URL + '/api/GripMaster/ForGotPassword',
  RESET_PASSWORD: BASE_URL + '/api/GripMaster/ChangePasswordByEmail',
  STORE_IMAGE_API: BASE_URL + '/api/GripMaster/UploadImages',
  GET_VERIFICATION_LINK: BASE_URL + '/api/GripMaster/GetVerificationLink',
  VERIFY_USER_BY_EMAIL: BASE_URL + '/api/GripMaster/VerifyUserByEmail',
};
