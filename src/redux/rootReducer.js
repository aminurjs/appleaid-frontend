import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  userSlice: userSlice,
});

export default rootReducer;
