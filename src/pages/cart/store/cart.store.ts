import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Video } from '../../../model/pexels-video-response';

export const cartStore = createSlice({
  name: 'cart',
  initialState: [] as Video[],
  reducers: {
    addToCart(state, action: PayloadAction<Video>) {
      const isAlreadyAdded = state.find(v => v.id === action.payload.id);
      if (!isAlreadyAdded && state.length < 9) {
        state.push(action.payload)
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const itemToRemove = state.findIndex(v => v.id === action.payload);
      if (itemToRemove !== -1)
        state.splice(itemToRemove, 1)
    },
    clearCart() {
      return [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartStore.actions
