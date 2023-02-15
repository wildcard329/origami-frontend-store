import { createContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [shouldShowCart, setShouldShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('cart items ', cart);
    setCart((products) => [...products, product]);
  };
  const removeFromCart = (productId) => setCart((products) => products.filter((product) => product.id !== productId));

  const toggleCart = () => setShouldShowCart(!shouldShowCart);

  return(
    <CartContext.Provider value={{ shouldShowCart, toggleCart, cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
