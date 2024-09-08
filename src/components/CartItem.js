// src/components/CartItem.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <Box sx={{ p: 2, border: "1px solid #ccc", mb: 2, borderRadius: "4px" }}>
      <Typography variant="h6">{item.name}</Typography>
      <Typography>Price: ${item.price}</Typography>
      <Typography>Quantity: {item.quantity}</Typography>
      <Button variant="outlined" color="secondary" onClick={handleRemoveItem}>
        Remove
      </Button>
    </Box>
  );
};

export default CartItem;
