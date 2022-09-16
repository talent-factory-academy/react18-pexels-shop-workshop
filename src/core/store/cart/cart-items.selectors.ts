import { RootState } from '../../../main';

// HARD CODED VALUE: each video costs 2 euro
export const SINGLE_VIDEO_PRICE = 2;

// get list of items in cart
export const getCartItems = (state: RootState) => state.cart.items;

// check if the provided id is already in the cart
export const isItemInCart = (id: number) => (state: RootState) =>
  state.cart.items.some(item => item.id === id);

// total of items
export const getTotalCartItems = (state: RootState) => state.cart.items.length;

// total cart cost
export const getTotalCost = (state: RootState) => state.cart.items.length * SINGLE_VIDEO_PRICE;


