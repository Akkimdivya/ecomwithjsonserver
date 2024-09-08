// src/utils/localStorage.js

// Function to save data to localStorage
export const saveToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value)); // Convert value to JSON string
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };
  
  // Function to load data from localStorage
  export const loadFromLocalStorage = (key) => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null; // Parse JSON string to object
    } catch (error) {
      console.error("Error loading from localStorage", error);
      return null;
    }
  };
  
  // Function to remove data from localStorage
  export const removeFromLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage", error);
    }
  };
  