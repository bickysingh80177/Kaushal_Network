import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth/authSlice";

const initialState = {
  authReducer: {
    user: null,
    isAuthenticated: false,
    token: null,
  },
};

const persistedToken = localStorage.getItem("token");
if (persistedToken) {
  initialState.authReducer.isAuthenticated = true;
  initialState.authReducer.token = persistedToken;
}

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
  },
  //   extraReducers: {},
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
