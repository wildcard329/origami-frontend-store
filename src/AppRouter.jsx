import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';

const AppRouter = () =>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/origami/:id' element={<Product />} />
    <Route path='/origami' element={<Products />} />
    <Route path='/checkout' element={<Checkout />} />
  </Routes>

export default AppRouter;
