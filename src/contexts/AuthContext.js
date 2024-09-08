// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction, logout as logoutAction } from "../redux/slices/authSlice";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      dispatch(loginAction(savedUser)); // Set user in Redux store
    }
  }, [dispatch]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save user to localStorage
    dispatch(loginAction(userData)); // Dispatch login action to Redux store
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user from localStorage
    dispatch(logoutAction()); // Dispatch logout action to Redux store
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
