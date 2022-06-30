import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: JSON.parse(localStorage.getItem('cart')) || {},
  },
  reducers: {
    setItemInCart: (state, action) => {
      const product = action.payload;

      if (!state.itemsInCart[product.id])
        state.itemsInCart[product.id] = {
          product,
          count: 1,
        };
      else state.itemsInCart[product.id].count++;
    },

    deleteItemFromCart: (state, action) => {
      const product = action.payload;

      if (state.itemsInCart[product.id].count === 1)
        delete state.itemsInCart[product.id];
      else state.itemsInCart[product.id].count--;
    },

    deleteProduct: (state, action) => {
      delete state.itemsInCart[action.payload.id];
    }
  },
});

export const { setItemInCart, deleteItemFromCart, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
