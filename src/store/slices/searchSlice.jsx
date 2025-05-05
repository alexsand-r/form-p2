// -- itemsSlice

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    text: "",
  },
  reducers: {
    setSearchText: (state, action) => {
      console.log("я ищу:", action.payload); // Логирование перед обновлением
      state.text = action.payload; // Обновление состояния
    },
  },
});

export default searchSlice.reducer;
export const { setSearchText } = searchSlice.actions;
