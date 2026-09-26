import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  username: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialValue,
  reducers: {
    setFormData: (state) => {},
  },
});

export const { setFormData } = loginSlice.actions;

export default loginSlice.reducer;
