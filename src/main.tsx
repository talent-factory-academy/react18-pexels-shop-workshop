import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import App from './App'
import { cartStore } from './pages/cart/store/cart.store';
import { playerStore } from './pages/catalog/store/player/player.store';
import { searchFiltersStore } from './pages/catalog/store/search/search-filters.store';
import { searchAPI } from './pages/catalog/store/search/search.api';

const rootReducer = combineReducers({
  searchFilters: searchFiltersStore.reducer,
  [searchAPI.reducerPath]: searchAPI.reducer,   // <=== must be in root (no combined reducers allowed)
  player: playerStore.reducer,
  cart: cartStore.reducer
});

// Create the type of store based on rootReducer
export type RootState = ReturnType<typeof rootReducer>

// Configure Store
export const store = configureStore({
  reducer: rootReducer,
  // https://vitejs.dev/guide/env-and-mode.html
  devTools: import.meta.env.DEV,
  // add RTK query middleware
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(searchAPI.middleware)
  }
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
