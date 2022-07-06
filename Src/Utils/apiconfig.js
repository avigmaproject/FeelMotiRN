import axios from "axios";
import { API } from "./baseurl";

const axiosTiming = (instance) => {
  instance.interceptors.request.use((request) => {
    request.ts = Date.now();
    // console.log("request send", request);
    return request;
  });

  instance.interceptors.response.use((response) => {
    const timeInMs = `${Number(Date.now() - response.config.ts).toFixed()}ms`;
    response.latency = timeInMs;
    // console.log("response recived", response);

    return response;
  });
};
axiosTiming(axios);

export const register = async (data) => {
  console.log("register", data);
  return axios(API.REGISTRATION_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    data,
  })
    .then((response) => {
      console.log(response);

      return response.data;
    })
    .catch((error) => {
      console.log("errorerror", error);
      throw error;
    });
};

export const login = async (data) => {
  return axios(API.LOGIN_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
export const forgotpassword = async (data) => {
  // console.log(data);
  return axios(API.FORGOT_PASSWORD, {
    method: "POST",
    data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
export const resetpassword = async (data) => {
  return axios(API.RESET_PASSWORD, {
    method: "POST",
    data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
export const uploadimage = async (data, access_token) => {
  return axios(API.STORE_IMAGE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
export const getuserpost = async (data, access_token) => {
  return axios(API.GET_USER_POST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
export const getusermasterdata = async (data, access_token) => {
  console.log("data", data, access_token);
  return axios(API.GET_USER_MASTER_DATA, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    data,
  })
    .then((response) => {
      console.log("response.data", response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
export const updateprofile = async (data, access_token) => {
  console.log("data", data, access_token);
  return axios(API.UPDATE_PROFILE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    data,
  })
    .then((response) => {
      console.log("response.data", response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
export const createupdateuserfavorite = async (data, access_token) => {
  return axios(API.CREATE_UPDATE_USER_FAVORITE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
export const createupdateuserpost = async (data, access_token) => {
  return axios(API.CREATE_UPDATE_USER_POST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    data,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
