import React from "react";
import AppH3 from "../atoms/AppH3";
import HorizontalCard from "../molecules/HorizontalCard";
import "./modal.css";

const Modal = ({ modalTitle, modalContent, modalFooter, modalCb }) => {

  return(
    <div className='app-modal'>
      <header>
        <AppH3 text={modalTitle} />
      </header>
      <main>
        {modalContent.map((item) => <HorizontalCard title={item.name} />)}
      </main>
      <footer>
        <button onClick={modalCb}>{modalFooter}</button>
      </footer>
    </div>
  )
}

export default Modal;
