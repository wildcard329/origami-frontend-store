import { createContext, useState } from "react";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [modalType, setModalType] = useState('cart');

  const toggleModal = () => setShouldShowModal(!shouldShowModal);
  const changeToCart = () => setModalType('cart');
  const changeToConfirmation = () => setModalType('confirmation');
  const isCartModal = () => modalType === 'cart';
  const isConfirmationModal = () => modalType === 'confirmation';

  return(
    <ModalContext.Provider value={{ shouldShowModal, toggleModal, changeToCart, changeToConfirmation, isCartModal, isConfirmationModal }}>
      {children}
    </ModalContext.Provider>
  )
};

export default ModalContext;
