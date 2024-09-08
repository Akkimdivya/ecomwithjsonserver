// src/components/Filters.js
import React from "react";
import { Box, Typography, Slider, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const Filters = ({ categories, selectedCategories, setSelectedCategories, priceRange, setPriceRange }) => {
  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value));
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Filters</Typography>
      <Typography>Categories</Typography>
      <FormGroup>
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            control={<Checkbox value={category} onChange={handleCategoryChange} />}
            label={category}
          />
        ))}
      </FormGroup>
      <Typography>Price Range</Typography>
      <Slider
        value={priceRange}
        onChange={(e, newValue) => setPriceRange(newValue)}
        valueLabelDisplay="auto"
        min={0}
        max={500}
        step={10}
      />
    </Box>
  );
};

export default Filters;
