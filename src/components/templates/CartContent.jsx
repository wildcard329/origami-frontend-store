import React, { useContext } from "react";
import { BsTrash } from 'react-icons/bs';
import CartContext from "../../utils/contexts/cartContext";
import InputNumber from "../atoms/InputNumber";
import AppH5 from "../atoms/AppH5";
import AppParagraph from "../atoms/AppParagraph";

const CartContent = () => {
  const { removeFromCart, cart, addToCart } = useContext(CartContext);
  const addProducts = (e) => {
    const val = e.target.value;
    // console.log(e.target.value);
    if (!isNaN(parseInt(val))) {

    }
  };
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
