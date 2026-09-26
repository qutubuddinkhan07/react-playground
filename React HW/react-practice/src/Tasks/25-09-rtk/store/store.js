import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../features/login/loginSlice";
import loginReducer from '../features/login'

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
