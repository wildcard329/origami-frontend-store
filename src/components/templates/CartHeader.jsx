import React, { useContext } from "react";
import "./cartheader.css";
import { AiOutlineShoppingCart } from "react-icons/ai"
import CartProvider from "../../utils/contexts/cartContext";

const CartHeader = () => {
  const { toggleCart } = useContext(CartProvider);
  return(
    <AiOutlineShoppingCart onClick={toggleCart} fill='orange' className='cart-icon' />
  )
}

export default CartHeader;
