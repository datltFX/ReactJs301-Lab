//do

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import countReducer from "./counter";

//.4.tao store
const store = configureStore({
  reducer: {
    auth: authReducer,
    count: countReducer,
  },
});
export default store;
