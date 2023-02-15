import { createContext, useState } from "react";

const CartContext = createContext(null);

const findItem = (itemArr, item) => itemArr.find((arrItem) => arrItem.id === item.id);

export const CartProvider = ({ children }) => {
  const [shouldShowCart, setShouldShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    const cartItem = findItem(cart, product);
    const cartWithoutItem = cart.filter((cProduct) => cProduct.id !== product.id);
    const itemToAdd = { ...product, quantity: cartItem?.quantity + 1 || 1 };
    if (!cartItem) {
      await setCart((products) => [...products, itemToAdd]);
    } else if (cartItem && itemToAdd?.quantity <= product.quantity) {
      await setCart(() => [...cartWithoutItem, itemToAdd])
    }
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
