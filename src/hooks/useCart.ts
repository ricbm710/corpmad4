//react
import { useContext } from "react";
//interfaces
import { cartContextType } from "../interfaces/cartContextType";
//contexts
import { CartContext } from "../contexts/CartProvider";

export const useCart = (): cartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
