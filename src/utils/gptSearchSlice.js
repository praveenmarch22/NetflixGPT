import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchViewToggle: false,
  },
  reducers: {
    changeGptSearchViewToggle: (state) => {
      state.gptSearchViewToggle = !state.gptSearchViewToggle;
    },
  },
});

export const { changeGptSearchViewToggle } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
