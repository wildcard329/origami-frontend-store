import { createContext, useState } from "react";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const toggleModal = () => setShouldShowModal(!shouldShowModal);

  return(
    <ModalContext.Provider value={{ shouldShowModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  )
};

export default ModalContext;
