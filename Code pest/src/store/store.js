import { configureStore } from "@reduxjs/toolkit";
import pestReducer from "../features/slices/Pest";

export const store = configureStore({
  reducer: {
    pest: pestReducer, // register your pest slice here
  },
});

export default store;
