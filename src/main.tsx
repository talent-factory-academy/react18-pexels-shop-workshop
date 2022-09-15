import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import App from './App'
import { cartStore } from './pages/cart/store/cart.store';
import { playerStore } from './pages/catalog/store/player/player.store';
import { searchFiltersStore } from './pages/catalog/store/search/search-filters.store';
import { searchAPI } from './pages/catalog/store/search/search.api';

const rootReducer = combineReducers({
  // Filter State: include the search text
  searchFilters: searchFiltersStore.reducer,
  // Video Player:
  player: playerStore.reducer,
  // Current Video
  cart: cartStore.reducer,
  // Search Result (it uses RTK Query)
  [searchAPI.reducerPath]: searchAPI.reducer,   // <=== must be in root (no combined reducers allowed)
});

// Create the Store type based on rootReducer
export type RootState = ReturnType<typeof rootReducer>

// Configure Store
export const store = configureStore({
  // store
  reducer: rootReducer,
  // enable devtool in dev mode: https://vitejs.dev/guide/env-and-mode.html
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
