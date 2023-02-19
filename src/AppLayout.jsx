import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './assets/images/79Eignqkliu1bLJPO9jw--1--7vtfx.jpg';
import CartHeader from './components/templates/CartHeader';
import Messages from './components/templates/Messages.jsx';
import Modal from './components/templates/Modal';
import ModalContext from './utils/contexts/modalContext';
import CartContent from './components/templates/CartContent';

const AppLayout = ({ children }) => {
  const { shouldShowModal: shouldShowCart, toggleModal: toggleCart } = useContext(ModalContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };
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
        {shouldShowCart ? 
          <Modal modalTitle='Your Cart' footerBtnCb={goToCheckout} footerBtnLabel='go to checkout'>
            <CartContent />
          </Modal> 
        : null}
      </div>
      <footer className='app-footer'>
        <p>2023 Online Origami Store</p>
      </footer>
    </div>
  )
}

export default AppLayout;
 