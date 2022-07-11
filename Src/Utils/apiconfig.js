import axios from "axios";
import { API } from "./baseurl";
import Geolocation from '@react-native-community/geolocation';
import { Platform ,PermissionsAndroid} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geocoder from 'react-native-geocoding';


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
export const uploaddocumnet = async (data, access_token) => {
  return axios(API.STORE_DOCUMENT_API, {
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
export const getuserstory = async (data, access_token) => {
  return axios(API.GET_USER_STORY, {
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
export const createupdateuserstory = async (data, access_token) => {
  return axios(API.CREATE_UPDATE_USER_STORY, {
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
}
export const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            console.log('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
const getOneTimeLocation = async () => {
    console.log('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
     async (position) => {
        console.log('You are Here');
 
        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);
 
        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);
        //Setting Longitude state
        await AsyncStorage.setItem('currentLongitude', currentLongitude)
        //Setting Latitude state
        await AsyncStorage.setItem('currentLatitude', currentLatitude)
        getAddress()
      },
      (error) => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };
const subscribeLocationLocation =async () => {
    watchID = Geolocation.watchPosition(
    async  (position) => {
        //Will give you the location on location change
        
        console.log('You are Here');
        console.log(position);
 
        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);
 
        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);
 
       //Setting Longitude state
        await AsyncStorage.setItem('currentLongitude', currentLongitude)
        //Setting Latitude state
        await AsyncStorage.setItem('currentLatitude', currentLatitude)
        getAddress()
      },
      (error) => {
        console.log(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };
 const  getAddress = async () => {
    let currentLatitude , currentLongitude
      values = await AsyncStorage.multiGet(['currentLatitude', 'currentLongitude'])
    if(values !== null) {
    console.log("reverse geo coding",values[0][1],values[1][1])
    // return 0 
     Geocoder.init("AIzaSyCJDORIshFYTnm0p5geFHPcJy7YBlQTuKA", {
      language: "en",
    }); // set the language
    await Geocoder.from(values[0][1],values[1][1])
      .then(async(json) => {
        // console.log("address json", json);
        var addressComponent = json.results[7].formatted_address;
        console.log("addressComponent", addressComponent);
       await AsyncStorage.setItem('addressComponent', addressComponent)

      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);
      });
    }
    
  };