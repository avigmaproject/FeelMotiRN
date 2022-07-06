import { combineReducers } from "redux";
import authReducer from "./auth";
import profileReducer from "./profile";

export default combineReducers({
  authReducer,
  profileReducer,
});
