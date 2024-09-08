// src/App.js
import React from "react";
import {  Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AdminProducts from "./pages/AdminProducts";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
          <CssBaseline />
          <GlobalStyles />
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<PrivateRoute />}>
              <Route index element={<Cart />} />
            </Route>
            <Route path="/admin/products" element={<PrivateRoute />}>
              <Route index element={<AdminProducts />} />
            </Route>
            <Route path="/wishlist" element={<PrivateRoute />}>
              <Route index element={<Wishlist />} />
            </Route>
            <Route path="/profile" element={<PrivateRoute />}>
              <Route index element={<Profile />} />
            </Route>
            <Route path="/" element={<ProductListing />} />
          </Routes>
        
      </AuthProvider>
    </Provider>
  );
}

export default App;
