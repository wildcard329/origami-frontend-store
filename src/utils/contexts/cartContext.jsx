import { createContext, useState } from "react";

const CartContext = createContext(null);

const findItem = (itemArr, item) => itemArr.find((arrItem) => arrItem.id === item.id);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async ({ product, productQty, messageCallback, successMsg, stockErrMsg, errMsg }) => {
    const cartItem = findItem(cart, product);
    const cartWithoutItem = cart.filter((cProduct) => cProduct.id !== product.id);
    const itemToAdd = { ...product, quantity: productQty || cartItem?.quantity + 1 || 1 };
    if (!cartItem) {
      await setCart((products) => [...products, itemToAdd]);
      messageCallback(successMsg);
    } else if (cartItem && itemToAdd?.quantity <= product.quantity) {
      await setCart(() => [...cartWithoutItem, itemToAdd]);
      messageCallback(successMsg);
    } else if (cartItem && itemToAdd?.quantity > product.quantity) {
      messageCallback(stockErrMsg);
    } else {
      messageCallback(errMsg);
    };
  };
  const removeFromCart = (productId) => setCart((products) => products.filter((product) => product.id !== productId));

  const resetCart = () => setCart([]);

  return(
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, resetCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
