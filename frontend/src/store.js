import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import authReducer from "./reducers/authReducer";

const reducer = combineReducers({
  auth: authReducer.loginRegUser,
});

const store = configureStore({
  reducer,
  // preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const middleware = [thunk];

// const store = configureStore(
//   // {
//   //   reducer: reducer,
//   //   middleware: applyMiddleware([...middleware]),
//   // }
//   reducer,
//   // initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

export default store;
