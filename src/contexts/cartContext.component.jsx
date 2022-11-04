import { createContext } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const value = {};

  return <CartContext.Provider value={value}></CartContext.Provider>;
};
