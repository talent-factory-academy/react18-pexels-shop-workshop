import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/catalog/CatalogPage';
import { NavBar } from './core/navbar/NavBar';
import { ConfirmOrder } from './pages/confirm-order/ConfirmOrder';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
       <Route path="catalog" element={<CatalogPage />} />
       <Route path="confirm-order" element={<ConfirmOrder />} />
       <Route path="/" element={<Navigate to="catalog" />} />
     </Routes>
    </BrowserRouter>

  );
}

export default App;
