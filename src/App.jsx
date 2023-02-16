import React from 'react'
import './App.css'
import AppLayout from './AppLayout';
import AppRouter from './AppRouter';
import { CartProvider } from './utils/contexts/cartContext';
import { MessageProvider } from './utils/contexts/messageContext';

const App = () => 
  <CartProvider>
    <MessageProvider>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </MessageProvider>
  </CartProvider>

export default App
