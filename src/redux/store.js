import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./image.slice";

const store = configureStore({
  reducer: imageReducer
});

export default store;