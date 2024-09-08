// src/pages/Wishlist.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { Grid, Button, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h4">Wishlist</Typography>
      <Grid container spacing={3}>
        {wishlistItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <ProductCard product={item} />
            <Button onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Wishlist;
