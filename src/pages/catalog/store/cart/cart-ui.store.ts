import { createSlice } from '@reduxjs/toolkit'
import { search } from '../filters/search-filters.store';
import { addToCart, clearCart } from './cart-items.store';

export const cartUiStore = createSlice({
  name: 'cart-ui',
  initialState: {
    isOpen: false
  },
  reducers: {
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    }
  },
  extraReducers:  builder => {
    builder
      .addCase(clearCart, (state) => {
        state.isOpen = false
      })
      .addCase(addToCart, (state) => {
        state.isOpen = true
      })
      .addCase(search, (state) => {
        state.isOpen = false
      })
  }
});

export const { openCart, closeCart, toggleCart } = cartUiStore.actions

