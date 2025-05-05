import { configureStore } from "@reduxjs/toolkit";
import employeeSliceReducer from "../store/slices/employeeSlice";
import searchSliceReducer from "../store/slices/searchSlice";

export const store = configureStore({
  reducer: {
    employee: employeeSliceReducer,
    search: searchSliceReducer,
  },
});
export default store;
