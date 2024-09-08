// src/pages/Cart.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import { Box, Button, Typography, Grid } from "@mui/material";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Handle removal of an item from the cart and refresh the page
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // Dispatch remove action to Redux store
    window.location.reload(); // Reload the page to refresh the cart
  };

  useEffect(() => {
    console.log("Cart items updated:", cartItems); // Debugging: log whenever cart items change
  }, [cartItems]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Cart</Typography>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Typography>{item.name}</Typography>
            <Typography>{item.price}</Typography>
            <Button onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
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
