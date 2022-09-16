import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import App from './App'
import { cartStore } from './pages/cart/store/cart.store';
import { catalogStore } from './pages/catalog/store';
import { videosSearchAPI } from './pages/catalog/store/search/videosSearchAPI';

const rootReducer = combineReducers({
  // Player + filters (Redux Store with combineReducer)
  catalog: catalogStore,
  // Video Search API (RTK Query)
  // NOTE: I would move this slice of the store in the `catalog` combineReducer
  // but we must set in root (no combined reducers allowed)
  [videosSearchAPI.reducerPath]: videosSearchAPI.reducer,
  // Cart items (Redux Store)
  cart: cartStore.reducer,
});

// Create the Store type based on rootReducer
export type RootState = ReturnType<typeof rootReducer>

// Configure Store
export const store = configureStore({
  // store root reducer
  reducer: rootReducer,
  // enable devtool in dev mode: https://vitejs.dev/guide/env-and-mode.html
  devTools: import.meta.env.DEV,
  // add RTK query middleware
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(videosSearchAPI.middleware)
  }
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
