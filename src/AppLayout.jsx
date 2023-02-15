import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/images/79Eignqkliu1bLJPO9jw--1--7vtfx.jpg';
import CartHeader from './components/templates/CartHeader';
import Modal from './components/layouts/Modal';
import CartContext from './utils/contexts/cartContext';

const AppLayout = ({ children }) => {
  const { shouldShowCart, cart } = useContext(CartContext);
  return(
    <div>
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
