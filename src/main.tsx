import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useDispatch } from 'react-redux';
import { Action, AnyAction, combineReducers, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import App from './App'
import { cartStore } from './core/store/cart';
import { catalogStore } from './pages/catalog/store';
import { videoSearchApi } from './pages/catalog/store/search/video-search.api';

const rootReducer = combineReducers({
  // Player + filters (Redux Store with combineReducer)
  catalog: catalogStore,
  // Cart items (Redux Store)
  cart: cartStore,
  // Video Search API (RTK Query)
  // NOTE: I would move this slice of the store in the `catalog` combineReducer
  // but we must set in root (no combined reducers allowed)
  [videoSearchApi.reducerPath]: videoSearchApi.reducer,
});

// Create the Store type based on rootReducer
export type RootState = ReturnType<typeof rootReducer>

// Create a type for Async Actions
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

// Type to use Thunk and dispatch async actions
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>()


// Configure Store
export const store = configureStore({
  // store root reducer
  reducer: rootReducer,
  // enable devtool in dev mode: https://vitejs.dev/guide/env-and-mode.html
  devTools: import.meta.env.DEV,
  // add RTK query middleware
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(videoSearchApi.middleware)
  }
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
