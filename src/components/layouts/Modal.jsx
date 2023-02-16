import React, { useContext } from "react";
import AppH3 from "../atoms/AppH3";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import CartContext from "../../utils/contexts/cartContext";
import { useNavigate } from 'react-router-dom';
import "./modal.css";
import AppButton from "../atoms/AppButton";

const Modal = ({ modalTitle, modalContent, modalFooter, modalCb }) => {
  const { toggleCart } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };
  return(
    <div className='app-modal'>
      <header className='modal-header'>
        <AppH3 text={modalTitle} />
        <AiOutlineCloseCircle fill='orange' onClick={toggleCart} className='modal-icon' />
      </header>
      <main className='modal-content'>
        <div className="span-3">
          <span>Name</span>
          <span>Amount</span>
          <span>Price</span>
        </div>
        <ul>
          {modalContent.map((item, index) => 
            <li className="modal-list" key={`${item.id}-${index}`}>
              <h5>{item.name}</h5>
              <span>{item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </li>
          )}
        </ul>
      </main>
      <footer className='modal-footer'>
        <AppButton btnCb={goToCheckout} btnLabel={modalFooter} />
      </footer>
    </div>
  )
}

export default Modal;
