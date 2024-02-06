import { createSlice } from "@reduxjs/toolkit";
import product from "../../product.json";

const initialState = {
  productData: [...product],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productAll: (state) => {
      state.productData = [...product];
    },
    filterDiscountProduct: (state) => {
      state.productData = state.productData.filter(
        (item) => item.discount !== null
      );
    },
    filterCategory: (state, action) => {
      const newItem = product.filter(
        (item) => item.category_id === action.payload
      );
      state.productData = [...newItem];
    },
    searchProduct: (state, action) => {
      const newItem = product.filter(
        (item) =>
          item.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
      );
      state.productData = [...newItem];
    },
  },
});

export const { productAll, filterDiscountProduct, filterCategory, searchProduct } =
  productSlice.actions;

export default productSlice.reducer;
