import React, { useContext } from "react";
import AppButton from "../components/atoms/AppButton";
import CartContent from "../components/templates/CartContent";
import ModalContext from "../utils/contexts/modalContext";

const Checkout = () => {
  const { toggleModal, changeToConfirmation } = useContext(ModalContext);
  const confirmationFn = () => {
    changeToConfirmation();
    toggleModal();
  };

  return(
    <div>
      <CartContent />
      <AppButton btnCb={confirmationFn} btnLabel={'confirm order'} />
    </div>
  )
}

export default Checkout;
