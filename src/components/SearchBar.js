// src/components/SearchBar.js
import React from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box sx={{ p: 2 }}>
      <TextField
        label="Search Products"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
