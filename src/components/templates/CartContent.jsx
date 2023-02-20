import React, { useContext } from "react";
import { BsTrash } from 'react-icons/bs';
import CartContext from "../../utils/contexts/cartContext";
import AppH5 from "../atoms/AppH5";
import AppParagraph from "../atoms/AppParagraph";
import { reduceArray } from "../../utils/functions/arrayMethods";

const CartContent = () => {
  const { removeFromCart, cart } = useContext(CartContext);
  const totalItems = reduceArray(cart, 'quantity', 0);
  const cartPrices = cart.map((item) => ({ price: item.price * item.quantity }));
  const totalPrice = reduceArray(cartPrices, 'price', 0);

  return(
    <>
      <div className="span-3">
        <AppParagraph text={'Name'} />
        <AppParagraph text={'Amount'} />
        <AppParagraph text={'Price'} />
      </div>
      <ul>
        {cart.map((item, index) => 
          <li className="modal-list" key={`${item.id}-${index}`}>
            <AppH5 text={item.name} />
            <AppParagraph text={item.quantity} />
            <AppParagraph text={`$${item.price * item.quantity}`} />
            <BsTrash fill='orange' onClick={() => removeFromCart(item.id)} />
          </li>
        )}
      </ul>
      <div className="span-3">
        <AppH5 text={'Total'} />
        <AppParagraph text={totalItems} />
        <AppParagraph text={`$${totalPrice}`} />
      </div>
    </>
  )
}

export default CartContent;
