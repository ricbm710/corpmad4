//interfaces
import { productToCart } from "./productToCart";

export interface cartContextType {
  cart: productToCart[];
  addToCart: (
    //productToAdd: Omit<productToCart, "qty">,
    productToAdd: productToCart
  ) => void; //qty will be added later, it's excluded by now
  /*addToCart2(prod: Omit<productToCart, "qty">): void; this would work too */
  removeFromCart: (idToRemove: number) => void;
}
