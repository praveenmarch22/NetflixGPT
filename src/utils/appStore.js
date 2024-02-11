import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptSearchSlice from "./gptSearchSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptSearchSlice,
    config: configSlice,
  },
});

export default appStore;
