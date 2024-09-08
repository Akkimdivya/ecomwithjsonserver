// src/pages/AdminProducts.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography, Grid, Card, CardContent, CardActions, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Rating } from "@mui/material";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", rating: 0 });

  // Fetch products from the backend
  const fetchProducts = () => {
    axios.get("https://ecomdb.onrender.com/products").then((response) => setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts(); // Call fetchProducts to load products initially
  }, []);

  // Handle product deletion
  const handleDeleteProduct = (id) => {
    axios.delete(`https://ecomdb.onrender.com/products/${id}`).then(() => {
      fetchProducts(); // Refetch products after deletion
    });
  };

  // Open edit dialog with the selected product details
  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setOpenEditDialog(true);
  };

  // Handle input changes in the edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  // Handle rating change in the edit form
  const handleRatingChange = (event, newValue) => {
    setCurrentProduct({ ...currentProduct, rating: newValue });
  };

  // Submit the updated product details
  const handleSaveChanges = () => {
    axios.put(`https://ecomdb.onrender.com/products/${currentProduct.id}`, currentProduct).then(() => {
      fetchProducts(); // Refetch products after editing
      setOpenEditDialog(false);
      setCurrentProduct(null);
    });
  };

  // Handle input changes in the add new product form
  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle rating change in the add new product form
  const handleNewProductRatingChange = (event, newValue) => {
    setNewProduct({ ...newProduct, rating: newValue });
  };

  // Add new product
  const handleAddNewProduct = () => {
    axios.post("https://ecomdb.onrender.com/products", newProduct).then(() => {
      fetchProducts(); // Refetch products after adding a new product
      setOpenAddDialog(false);
      setNewProduct({ name: "", description: "", price: "", rating: 0 });
    });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Admin Product Management</Typography>
      <Button variant="contained" color="primary" onClick={() => setOpenAddDialog(true)} sx={{ mb: 2 }}>
        Add New Product
      </Button>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            {/* Product Card Layout */}
            <Card>
              <CardContent>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6">${product.price}</Typography>
                <Rating value={product.rating} readOnly /> {/* Display the rating */}
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </Button>
                <Button size="small" onClick={() => handleEditProduct(product)}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Edit Product Dialog */}
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            value={currentProduct?.name || ""}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            value={currentProduct?.description || ""}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Price"
            name="price"
            type="number"
            value={currentProduct?.price || ""}
            onChange={handleInputChange}
            fullWidth
          />
          <Rating
            name="rating"
            value={currentProduct?.rating || 0}
            onChange={handleRatingChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveChanges} color="primary" variant="contained">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add New Product Dialog */}
      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            value={newProduct.name}
            onChange={handleNewProductChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            value={newProduct.description}
            onChange={handleNewProductChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Price"
            name="price"
            type="number"
            value={newProduct.price}
            onChange={handleNewProductChange}
            fullWidth
          />
          <Rating
            name="rating"
            value={newProduct.rating}
            onChange={handleNewProductRatingChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)}>Cancel</Button>
          <Button onClick={handleAddNewProduct} color="primary" variant="contained">
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminProducts;
