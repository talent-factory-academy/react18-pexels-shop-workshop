import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/catalog/CatalogPage';
import { CartPage } from './pages/cart/CartPage';
import { NavBar } from './core/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
       <Route path="catalog" element={<CatalogPage />} />
       <Route path="cart" element={<CartPage />} />
       <Route
         path="/"
         element={
           <Navigate to="catalog" />
         }
       />
     </Routes>
    </BrowserRouter>

  );
}

export default App;
