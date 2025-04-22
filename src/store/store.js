import { configureStore } from "@reduxjs/toolkit";
import employeeSliceReducer from "../store/slices/employeeSlice";

export const store = configureStore({
  reducer: {
    employee: employeeSliceReducer,
  },
});
export default store;
