import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { addToCart } from '../../../cart/store/cart.store';

interface PlayerStore {
  videoId: number | null
}

const initialState: PlayerStore = {
  videoId: null
}

export const playerStore = createSlice({
  name: 'users',
  initialState,
  reducers: {
    playVideo(state, action: PayloadAction<number>) {
      state.videoId = action.payload;
    },
    closeVideo(state) {
      state.videoId = null;
    },
  },
  extraReducers: builder => {
    // close video player when item is added to cart
    // builder
      // close video player when added to cart
      //.addCase(addToCart, () => ({ videoId: null }))
  }
});

export const { playVideo, closeVideo } = playerStore.actions
