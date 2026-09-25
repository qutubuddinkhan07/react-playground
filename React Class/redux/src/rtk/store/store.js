import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import instagramReducer from "../features/instagram/instagramSlice";

export const rtkstore = configureStore({
  reducer: { counter: counterReducer, instagram: instagramReducer },
});
