import React, { useContext, useEffect } from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
import Messages from './components/templates/Messages.jsx';
import Modal from './components/templates/Modal';
import CartContext from './utils/contexts/cartContext';
import ModalContext from './utils/contexts/modalContext';
import CartContent from './components/templates/CartContent';
import AppHeader from './components/templates/app-header/AppHeader';

const AppLayout = ({ children }) => {
  const { shouldShowModal, toggleModal, isCartModal, isConfirmationModal, changeToCart } = useContext(ModalContext);
  const { resetCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const goToCheckout = () => {
    toggleModal();
    navigate('/checkout');
  };
  const goToHome = () => {
    toggleModal();
    resetCart();
    navigate('/');
    changeToCart();
  };
  return(
    <div id='layout'>
      <header className='app-header'>
        <AppHeader />
      </header>
      <div className='app-content'>
        <Messages />
        {children}
        {shouldShowModal && isCartModal() ? 
          <Modal modalTitle='Your Cart' footerBtnCb={goToCheckout} footerBtnLabel='go to checkout'>
            <CartContent />
          </Modal> 
        : null}
        {shouldShowModal && isConfirmationModal() ?
          <Modal modalTitle='Order Confirmed' footerBtnCb={goToHome} footerBtnLabel='back to home'>
            <h3>Thank you for placing your order!</h3>
            <p>Order will be available for pickup at nearest retail location.</p>
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
 