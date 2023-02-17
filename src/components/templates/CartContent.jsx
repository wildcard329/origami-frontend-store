import React, { useContext } from "react";
import { BsTrash } from 'react-icons/bs';
import CartContext from "../../utils/contexts/cartContext";

const CartContent = () => {
  const { removeFromCart, cart } = useContext(CartContext);
  return(
    <>
      <div className="span-3">
        <span>Name</span>
        <span>Amount</span>
        <span>Price</span>
      </div>
      <ul>
        {cart.map((item, index) => 
          <li className="modal-list" key={`${item.id}-${index}`}>
            <h5>{item.name}</h5>
            <span>{item.quantity}</span>
            <span>${item.price * item.quantity}</span>
            <BsTrash fill='orange' onClick={() => removeFromCart(item.id)} />
          </li>
        )}
      </ul>
    </>
  )
}

export default CartContent;
