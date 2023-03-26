import { createSlice } from "@reduxjs/toolkit";

const SelectedProductSlice = createSlice({
  name: "AddCartProduct",
  initialState: {
    cartItem: [],
    cartTotalAmount: 0,
  },
  reducers: {
    AddToCart: (state, action) => {
      const productIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIndex >= 0) {
        state.cartItem[productIndex].qty = action.payload.qty;
      } else {
        const productCart = {
          ...action.payload,
          qty: 1,
          isCartProductAdded: true,
        };
        state.cartItem.push(productCart);
      }
    },
    removeCartItem: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => {
        return item.id !== action.payload;
      });
    },
    cartTotalAmountValue: (state, action) => {
      state.cartTotalAmount = action.payload;
    },
  },
});

export const { AddToCart, removeCartItem, cartTotalAmountValue } =
  SelectedProductSlice.actions;
export default SelectedProductSlice.reducer;
