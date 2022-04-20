import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "../features/sortSlice";
export const store = configureStore({
  reducer: {
    sorting: sortReducer,
  },
});
