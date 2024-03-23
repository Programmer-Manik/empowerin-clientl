import { createSlice } from "@reduxjs/toolkit";
const themeState = {
  themeMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: themeState,
  reducers: {
    darkMode: (state) => {
      state.themeMode = !state.themeMode;
    },
  },
});

export const { darkMode } = themeSlice.actions;

export default themeSlice.reducer;
