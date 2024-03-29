import auth from "@/Config/Firebase.config";
import { createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (currentUser) => {
  console.log(currentUser);
  return currentUser;
});

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
      const user = JSON.stringify(payload);
      localStorage.setItem("user", user);
    },
    logOut: (state, { payload }) => {
      if (payload === "logout") {
        state.user = null;
        localStorage.removeItem("user");
      }
    },
  },
});
export const { login, logOut } = userSlice.actions;
export default userSlice.reducer;
