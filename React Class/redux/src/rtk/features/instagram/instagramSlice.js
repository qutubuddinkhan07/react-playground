import { createSlice } from "@reduxjs/toolkit";

export const instagramSlice = createSlice({
  name: "instagram",
  initialState: {
    like: 0,
    dislike: 0,
  },
  reducers: {
    giveLike: (state) => {
      state.like += 1;
    },
    giveDislike: (state) => {
      state.dislike += 1;
    },
    reset: (state) => {
      state.like = 0;
      state.dislike = 0;
    },
  },
});

export const { giveLike, giveDislike, reset } = instagramSlice.actions;

export default instagramSlice.reducer;
