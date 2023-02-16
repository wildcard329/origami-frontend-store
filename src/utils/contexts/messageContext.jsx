import { createContext, useState } from "react";

const MessageContext = createContext(null);

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [newMsgId, setNewMsgId] = useState(0);

  const discardMsg = (msg) => {
    const timeout = msg.type === 'cart' ? 5000 : msg.type === 'warning' ? 3000 : 0; 
    setTimeout(() => {
      removeMessage(msg)
    }, timeout);
  };

  const addMessage = (msg) => {
    setMessages((msgData) => [...msgData, msg]);
    setNewMsgId(() => newMsgId+1);
    discardMsg(msg);
  };
  const removeMessage = (msg) => setMessages((msgData) => msgData.filter((fMsg) => fMsg.id !== msg.id));

  return(
    <MessageContext.Provider value={{ messages, addMessage, removeMessage, newMsgId }}>
      {children}
    </MessageContext.Provider>
  )
};

export default MessageContext;
