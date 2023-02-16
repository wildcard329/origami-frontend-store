import React, { useContext } from "react";
import CartContext from "../../utils/contexts/cartContext";
import MessageContext from "../../utils/contexts/messageContext";
import AppButton from "../atoms/AppButton";

const AddToCartButton = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addMessage, newMsgId } = useContext(MessageContext);
  const addItemToCart = () => {
    const message = { text: `${product.name} added to cart!`, id: newMsgId, type: 'cart' };
    const stockErr = { text: `No more ${product.name} available.`, id: newMsgId, type: 'warning' };
    const generalErr = { text: `Unable to add ${product.name} to cart.`, id: newMsgId, type: 'warning' };
    addToCart({ product, messageCallback: addMessage, successMsg: message, stockErrMsg: stockErr, errMsg: generalErr });
  }
  return(
    <AppButton btnCb={addItemToCart} btnLabel='add to cart' />
  )
}

export default AddToCartButton;
