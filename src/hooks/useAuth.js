// src/hooks/useAuth.js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  return useContext(AuthContext); // Access the AuthContext to get user, login, logout
};

export default useAuth;
