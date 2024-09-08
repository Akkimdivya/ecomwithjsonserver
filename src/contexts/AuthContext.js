// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction, logout as logoutAction } from "../redux/slices/authSlice";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      dispatch(loginAction(savedUser)); // Dispatch login action to Redux store
    }
  }, [dispatch]);

  const login = (userData) => {
    setUser(userData);
    dispatch(loginAction(userData)); // Dispatch login action to Redux store
  };

  const logout = () => {
    setUser(null);
    dispatch(logoutAction()); // Dispatch logout action to Redux store
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
