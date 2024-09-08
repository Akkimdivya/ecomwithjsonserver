// src/utils/helpers.js

// Function to format price as currency
export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`; // Format amount to two decimal places with a dollar sign
  };
  
  // Function to validate email format
  export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Function to calculate total price in the cart
  export const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  // Add more helper functions as needed for common tasks
  