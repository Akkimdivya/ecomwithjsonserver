// src/components/PrivateRoute.js
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext); // Get user from AuthContext
  return user ? <Outlet /> : <Navigate to="/login" />; // If user exists, render child components; otherwise, redirect to login
};

export default PrivateRoute;
