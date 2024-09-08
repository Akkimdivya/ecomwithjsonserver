// src/pages/ProductDetails.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Card,
  CardContent,
  Rating,
} from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams(); // Extract product ID from URL
  const [product, setProduct] = useState(null); // State to store product details
  const [loading, setLoading] = useState(true); // State to handle loading state
  const dispatch = useDispatch(); // Redux dispatch function
  const navigate = useNavigate(); // Navigate function from react-router-dom

  useEffect(() => {
    // Fetch product details when the component is mounted
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`); // Fetch product by ID
        setProduct(response.data); // Set the fetched product data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching product:", error); // Log any errors
        setLoading(false); // Set loading to false
      }
    };

    fetchProduct(); // Call the fetch function
  }, [id]); // Dependency array with 'id' to refetch if id changes

  const handleAddToCart = () => {
    // Function to handle adding product to the cart
    dispatch(addToCart(product)); // Dispatch Redux action to add the product
    navigate("/cart"); // Navigate to the cart page
  };

  if (loading) {
    // Show loading spinner while data is being fetched
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    // Show message if the product is not found
    return <Typography variant="h6">Product not found.</Typography>;
  }

  return (
    <Box sx={{ p: 5, display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 800 }}>
        {/* Display product image */}
        {/* Product details */}
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Price: ${product.price}
          </Typography>
          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            precision={0.5}
          />
          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetails;
