import { configureStore } from "@reduxjs/toolkit";
import formTopSliceReducer from "./slices/formTopSlice";

export const store = configureStore({
  reducer: {
    formTopItem: formTopSliceReducer,
  },
});
export default store;
