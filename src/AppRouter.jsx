import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Checkout from './pages/Checkout';
// import Home from './pages/Home';
// import Product from './pages/Product';
// import Products from './pages/Products';

const FallBackRender = ({ children }) => 
  <Suspense fallback={<div>loading...</div>}>
    {children}
  </Suspense>

const Checkout = lazy(() => import('./pages/Checkout.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Product = lazy(() => import('./pages/Product.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'))

const AppRouter = () =>
  <Routes>
    <Route path='/' element={<FallBackRender><Home /></FallBackRender>} />
    <Route path='/origami/:id' element={<FallBackRender><Product /></FallBackRender>} />
    <Route path='/origami' element={<FallBackRender><Products /></FallBackRender>} />
    <Route path='/checkout' element={<FallBackRender><Checkout /></FallBackRender>} />
  </Routes>

export default AppRouter;
