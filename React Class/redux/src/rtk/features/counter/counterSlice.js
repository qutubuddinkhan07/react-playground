import { createSlice } from "@reduxjs/toolkit";

//! If we are passing the return then it will the new state what we don't need
//? Uncaught Error: [Immer] An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { count: 0 },
//   reducers: {
//     increment: (state) => {
//       return (state.count += 1);
//     },
//     decrement: (state) => {
//       return (state.count -= 1);
//     },
//     reset: (state) => {
//       return (state.count = 0);
//     },
//   },
// });

//! ---- Correct one ----
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

//! Actions for developer functions
export const { increment, decrement, reset } = counterSlice.actions;

//! Reducers for store
export default counterSlice.reducer;
