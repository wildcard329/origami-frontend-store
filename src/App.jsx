import React from 'react'
import './App.css'
import AppLayout from './AppLayout';
import AppRouter from './AppRouter';
import { CartProvider } from './utils/contexts/cartContext';

const App = () => 
  <CartProvider>
    <AppLayout>
      <AppRouter />
    </AppLayout>
  </CartProvider>

export default App
