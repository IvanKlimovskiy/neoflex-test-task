import {configureStore} from "@reduxjs/toolkit";
import headphones from "../reducer/headphonesSlice";

const store = configureStore({
  reducer: {
    headphones
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
