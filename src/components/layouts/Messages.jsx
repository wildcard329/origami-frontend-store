import React, { useContext } from 'react';
import ModalContext from '../../utils/contexts/modalContext';
import MessageContext from '../../utils/contexts/messageContext';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import AppButton from '../atoms/AppButton';
import "./messages.css";

const Messages = () => {
  const { toggleModal } = useContext(ModalContext);
  const { messages, removeMessage } = useContext(MessageContext);
  return(
    <ul className="app-messages">
      {messages?.map((message, index) => <li key={index}><div><AiOutlineCloseCircle onClick={() => removeMessage(message)} />{message.text}</div><AppButton btnCb={toggleModal} btnLabel='view cart' /></li>)}
    </ul>
  )
}

export default Messages;
