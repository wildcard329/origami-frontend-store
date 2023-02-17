import React from 'react'
import './App.css'
import AppLayout from './AppLayout';
import AppRouter from './AppRouter';
import { CartProvider } from './utils/contexts/cartContext';
import { MessageProvider } from './utils/contexts/messageContext';
import { ModalProvider } from './utils/contexts/modalContext';

const App = () => 
  <CartProvider>
    <MessageProvider>
      <ModalProvider>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </ModalProvider>
    </MessageProvider>
  </CartProvider>

export default App
