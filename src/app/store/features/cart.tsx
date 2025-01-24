"use client";
import { createSlice } from "@reduxjs/toolkit";

interface Productinfo {
  imageUrl(
    imageUrl: string
  ): string | import("next/dist/shared/lib/get-img-props").StaticImport;
  id: number;
  name: string;
  description: string;
  category: string;
  discountPercentage: number;
  stockLevel: number;
  price: number;
  image: "imageUrl:image.asset->url";
}

// Define a type for the slice state

// Define the initial state using that type
const initialState: Productinfo[] = [];

export const cartSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart(state, action) {
      const uuid = Math.floor(1000 + Math.random() * 9000);
      const newObj = { ...action.payload, uuid };
      state.push(newObj);
    },

    deltItem(state, { payload }) {
      const index = state.findIndex(
        (val: { id: number }) => val.id === payload
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addToCart, deltItem } = cartSlice.actions;

export default cartSlice.reducer;
