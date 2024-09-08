// src/redux/slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount += action.payload.price * action.payload.quantity;
    },
    removeFromCart(state, action) {
      const itemToRemove = state.items.find((item) => item.id === action.payload.id);
      if (itemToRemove) {
        // Update totalAmount by subtracting the removed item's total price
        state.totalAmount -= itemToRemove.price * itemToRemove.quantity;
        // Remove the item from the cart
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
