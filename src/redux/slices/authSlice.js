// src/redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // Ensure initial state is null for unauthenticated users
  },
  reducers: {
    login(state, action) {
      state.user = action.payload; // Set the user object from action payload
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save user to localStorage
      console.log("User logged in:", action.payload); // Debugging: Log the user object after login
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
    updateProfile(state, action) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
  },
});

export const { login, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
