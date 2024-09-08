// src/components/WishlistItem.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromWishlist(item.id));
  };

  const handleMoveToCart = () => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <Box sx={{ p: 2, border: "1px solid #ccc", mb: 2, borderRadius: "4px" }}>
      <Typography variant="h6">{item.name}</Typography>
      <Typography>Price: ${item.price}</Typography>
      <Button variant="outlined" color="primary" onClick={handleMoveToCart} sx={{ mr: 1 }}>
        Move to Cart
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleRemoveItem}>
        Remove
      </Button>
    </Box>
  );
};

export default WishlistItem;
