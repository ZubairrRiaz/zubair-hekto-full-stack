'use client'
import { client } from 'src/sanity/lib/client';
import { Productinfo } from '../../Product/page';
import { createSlice } from '@reduxjs/toolkit'

async function sanityDataProducts() {
  try {
    const dataFetch = await client.fetch(`*[_type == "product"]{
      id,
      name,
      description,
      category,
      discountPercentage,
      stockLevel,
      price,
      "imageUrl":image.asset->url,
      isFeaturedProduct
    }`);
    return dataFetch;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return null; // or handle the error as needed
  }
}

let initialState: Productinfo[] = [];

(async () => {
  initialState = await sanityDataProducts() || [];
})();

export const chairsSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

export default chairsSlice.reducer

