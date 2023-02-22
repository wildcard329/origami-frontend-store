import React, { useContext } from "react";
import { BsTrash } from 'react-icons/bs';
import CartContext from "../../utils/contexts/cartContext";
import AppH5 from "../atoms/AppH5";
import AppParagraph from "../atoms/AppParagraph";
import { reduceArray } from "../../utils/functions/arrayMethods";
import HorizontalCardSpan4 from "../molecules/HorizontalCardSpan4";

const CartContent = () => {
  const { removeFromCart, cart } = useContext(CartContext);
  const totalItems = reduceArray(cart, 'quantity', 0);
  const cartPrices = cart.map((item) => ({ price: item.price * item.quantity }));
  const totalPrice = reduceArray(cartPrices, 'price', 0);

  return(
    <>
      <HorizontalCardSpan4 title={'Name'} content1={'Amount'} content2={'Price'} />
      <ul>
        {cart.map((item, index) => {
              return (<li className="modal-list" key={`${item.id}-${index}`}>
                <HorizontalCardSpan4 
                  title={item.name} 
                  content1={item.quantity} 
                  content2={`$${item.price * item.quantity}`} 
                  btnContent={<BsTrash fill='orange' onClick={() => removeFromCart(item.id)} />}
                />
            </li>)
          }
        )}
      </ul>
      <HorizontalCardSpan4 title={'Total'} content1={totalItems} content2={`$${totalPrice}`} />
    </>
  )
}

export default CartContent;
