//interfaces
import { productToCart } from "./productToCart";

export interface cartContextType {
  cart: productToCart[];
  addToCart: (
    //productToAdd: Omit<productToCart, "qty">,
    productToAdd: productToCart
  ) => void; //qty will be added later, it's excluded by now
  removeFromCart: (idToRemove: number) => void;
  updateCartItemQty: (id: number, newQty: number) => void;
}
