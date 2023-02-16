import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/images/79Eignqkliu1bLJPO9jw--1--7vtfx.jpg';
import CartHeader from './components/templates/CartHeader';
import Messages from './components/layouts/Messages.jsx';
import Modal from './components/layouts/Modal';
import CartContext from './utils/contexts/cartContext';

const AppLayout = ({ children }) => {
  const { shouldShowCart, cart } = useContext(CartContext);
  const scrollLockedNode = document.getElementById('root');
  useEffect(() => {
    if (shouldShowCart) {
      scrollLockedNode.classList.add('scroll-lock')
    } else {
      scrollLockedNode.classList.remove('scroll-lock')
    };
  }, [shouldShowCart]);
  return(
    <div id='layout'>
      <header className='app-header'>
        <div>
          <img className='logo' src={Logo} alt='logo' />
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/origami'>Origami</Link>
          <Link to='/books'>Books</Link>
          <CartHeader />
        </div>
      </header>
      <div className='app-content'>
        <Messages />
        {children}
        {shouldShowCart ? <Modal modalTitle='Your Cart' modalContent={cart} modalFooter='Checkout' /> : null}
      </div>
      <footer className='app-footer'>
        <p>2023 Online Origami Store</p>
      </footer>
    </div>
  )
}

export default AppLayout;
