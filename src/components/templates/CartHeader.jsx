import React, { useContext } from "react";
import "./cartheader.css";
import { AiOutlineShoppingCart } from "react-icons/ai"
import ModalContext from "../../utils/contexts/modalContext";

const CartHeader = () => {
  const { toggleModal } = useContext(ModalContext);
  return(
    <AiOutlineShoppingCart onClick={toggleModal} fill='orange' className='cart-icon' />
  )
}

export default CartHeader;
