import { configureStore } from "@reduxjs/toolkit";
import SelectedProductSlice from "./SelectedProductSlice";

const store = configureStore({
  reducer: {
    AddCartProduct: SelectedProductSlice,
  },
});

export default store;
