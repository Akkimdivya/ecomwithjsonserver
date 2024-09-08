// src/pages/Cart.js
import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Grid } from "@mui/material";
import CartItem from "../components/CartItem"; // Use CartItem component

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Cart</Typography>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <CartItem item={item} /> {/* Render CartItem component for each item */}
          </Grid>
        ))}
      </Grid>
      {cartItems.length === 0 && (
        <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
          Your cart is empty.
        </Typography>
      )}
    </Box>
  );
};

export default Cart;
