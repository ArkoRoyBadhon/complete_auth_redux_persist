/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
  user: any | null;
}

const initialState: AuthState = {
  token: "aa",
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setCredentials: (state, action) => {
      const data = action.payload;
      console.log("inside", data);

      state.user = data?.user;
      state.token = data?.accessToken;

      console.log("ACC", data?.accessToken);
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Export the action creator
export const { setUser, setToken, clearUser, setCredentials, logOut } =
  userSlice.actions;

// Export the reducer
export default userSlice.reducer;
