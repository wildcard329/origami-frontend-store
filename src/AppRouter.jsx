import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SuspenseFallback from './components/templates/SuspenseFallback.jsx';

const Checkout = lazy(() => import('./pages/Checkout.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Product = lazy(() => import('./pages/Product.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'))

const AppRouter = () =>
  <Suspense fallback={<SuspenseFallback />}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/origami/:id' element={<Product />} />
      <Route path='/origami' element={<Products />} />
      <Route path='/books' element={<Products />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  </Suspense>

export default AppRouter;
