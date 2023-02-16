import React, { useContext } from 'react';
import CartContext from '../../utils/contexts/cartContext';
import MessageContext from '../../utils/contexts/messageContext';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import AppButton from '../atoms/AppButton';
import "./messages.css";

const Messages = () => {
  const { toggleCart } = useContext(CartContext);
  const { messages, removeMessage } = useContext(MessageContext);
  return(
    <ul className="app-messages">
      {messages?.map((message, index) => <li key={index}><div><AiOutlineCloseCircle onClick={() => removeMessage(message)} />{message.text}</div><AppButton btnCb={toggleCart} btnLabel='view cart' /></li>)}
    </ul>
  )
}

export default Messages;
