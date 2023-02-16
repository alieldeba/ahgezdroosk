import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from "../slices/teachersSlice";

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
  },
});
