'use client'
import { configureStore } from '@reduxjs/toolkit'
import { chairsSlice } from './features/furnitureArray'
import { cartSlice } from './features/cart'
// ...



export const store = configureStore({
  reducer: {
    chairs: chairsSlice.reducer, // Use the reducer property
    cart: cartSlice.reducer      // Use the reducer property
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
