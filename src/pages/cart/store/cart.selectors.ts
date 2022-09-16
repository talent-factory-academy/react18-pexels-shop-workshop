import { RootState } from '../../../main';

export const SINGLE_VIDEO_PRICE = 2; // each video costs 2 euro

export const getCartItems = (state: RootState) => state.cart;
/*export const isItemInCart = (id: number) => (state: RootState) =>
  !!state.cart.find(item => item.id === id);*/

export const isItemInCart = (id: number) => (state: RootState) =>
  state.cart.some(item => item.id === id);

export const getTotalCart = (state: RootState) => state.cart.reduce(acc => acc + 1, 0);
export const getTotalCost = (state: RootState) => state.cart.length * SINGLE_VIDEO_PRICE;

