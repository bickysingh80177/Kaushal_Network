import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: !!localStorage.getItem("token"),
    token: null,
  },
  reducers: {
    onUserLogin(state, action) {
      console.log(action);
      state.isAuthenticated = true;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    onUserLogout(state, action) {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { onUserLogin, onUserLogout } = authSlice.actions;

export default authSlice.reducer;
