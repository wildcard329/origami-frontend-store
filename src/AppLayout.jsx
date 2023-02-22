import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from './assets/images/79Eignqkliu1bLJPO9jw--1--7vtfx.jpg';
import CartHeader from './components/templates/CartHeader';
import Messages from './components/templates/Messages.jsx';
import Modal from './components/templates/Modal';
import CartContext from './utils/contexts/cartContext';
import ModalContext from './utils/contexts/modalContext';
import CartContent from './components/templates/CartContent';
import AppHeader from './components/templates/app-header/AppHeader';

const AppLayout = ({ children }) => {
  const { shouldShowModal, toggleModal, isCartModal, isConfirmationModal, changeToCart } = useContext(ModalContext);
  const { resetCart } = useContext(CartContext);
  const navigate = useNavigate();
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
        {/* <div>
          <img className='logo' src={Logo} alt='logo' />
        </div>
        <select className='mobile-nav'>
          <option value={'/'}>Home</option>
          <option value={'/origami'}>Origami</option>
          <option value={'/books'}>Books</option>
        </select>
        <div className='desktop-nav'>
          <Link to='/'>Home</Link>
          <Link to='/origami'>Origami</Link>
          <Link to='/books'>Books</Link>
        </div>
        <div>
          <CartHeader />
        </div> */}
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
 