import React, { useContext } from "react";
import AppH3 from "../atoms/AppH3";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ModalContext from "../../utils/contexts/modalContext";
import AppButton from "../atoms/AppButton";
import "./modal.css";

const Modal = ({ modalTitle, children, footerBtnCb, footerBtnLabel }) => {
  const { toggleModal } = useContext(ModalContext);
  return(
    <div className='app-modal'>
      <header className='modal-header'>
        <AppH3 text={modalTitle} />
        <AiOutlineCloseCircle fill='orange' onClick={toggleModal} className='modal-icon' />
      </header>
      <main className='modal-content'>
        {children}
      </main>
      <footer className='modal-footer'>
        <AppButton btnCb={footerBtnCb} btnLabel={footerBtnLabel} />
      </footer>
    </div>
  )
}

export default Modal;
