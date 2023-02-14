import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';

const AppRouter = () =>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/origami/:id' element={<Product />} />
    <Route path='/origami' element={<Products />} />
  </Routes>

export default AppRouter;
