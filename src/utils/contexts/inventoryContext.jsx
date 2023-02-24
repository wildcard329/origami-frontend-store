import { createContext, useEffect, useState } from 'react';
import { getProducts } from '../../controllers/productController';

const InventoryContext = createContext(null);

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    setInventory(getProducts());
  }, []);
  return(
    <InventoryContext.Provider value={{}}>
      {children}
    </InventoryContext.Provider>
  )
}
