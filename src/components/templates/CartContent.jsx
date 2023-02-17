import React, { useContext } from "react";
import { BsTrash } from 'react-icons/bs';
import CartContext from "../../utils/contexts/cartContext";
import AppH5 from "../atoms/AppH5";
import AppParagraph from "../atoms/AppParagraph";

const CartContent = () => {
  const { removeFromCart, cart } = useContext(CartContext);

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
            {/* <InputNumber inputValue={item.quantity} inputName='productQuantity' inputChangeCb={addProducts} /> */}
            <AppParagraph text={`$${item.price * item.quantity}`} />
            <BsTrash fill='orange' onClick={() => removeFromCart(item.id)} />
          </li>
        )}
      </ul>
    </>
  )
}

export default CartContent;
