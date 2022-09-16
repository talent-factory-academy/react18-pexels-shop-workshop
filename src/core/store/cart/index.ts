import { combineReducers } from '@reduxjs/toolkit';
import { cartUiStore } from './cart-ui.store';
import { cartItemsStore } from './cart-items.store';

export const cartStore = combineReducers({
  items: cartItemsStore.reducer,
  ui: cartUiStore.reducer
})
