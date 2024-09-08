// src/pages/Checkout.js
import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Implement checkout functionality here
    alert("Order placed successfully!");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Checkout</Typography>
      {cartItems.map((item) => (
        <Typography key={item.id}>{item.name} - Quantity: {item.quantity}</Typography>
      ))}
      <Typography variant="h6">Total: ${totalAmount}</Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Place Order
      </Button>
    </Box>
  );
};

export default Checkout;
