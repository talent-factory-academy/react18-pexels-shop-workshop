import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Video } from '../../../../model/pexels-video-response';
// import { addToCart } from '../../../cart/store/cart.store';

interface PlayerStore {
  video: Video | null;
}

const initialState: PlayerStore = {
  video: null
}

export const playerStore = createSlice({
  name: 'users',
  initialState,
  reducers: {
    playVideo(state, action: PayloadAction<Video>) {
      state.video = action.payload;
    },
    closeVideo(state) {
      state.video = null;
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
