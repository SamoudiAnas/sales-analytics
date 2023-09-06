import { SliceCaseReducers, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  isLoggedIn: boolean;
  user: {
    uid: string;
    email: string;
    authority: "manager" | "cashier" | "admin";
  } | null;
}

export const userSlice = createSlice<UserState, SliceCaseReducers<UserState>>({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: {
      uid: "",
      email: "",
      authority: "cashier",
    },
  },
  reducers: {},
});

export default userSlice.reducer;
