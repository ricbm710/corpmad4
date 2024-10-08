//react
import { createContext, useEffect, useState } from "react";
//interfaces
import { cartContextType } from "../interfaces/cartContextType";
import { CartProviderProps } from "../interfaces/cartProviderProps";
import { productToCart } from "../interfaces/productToCart";

//*this will hold the cart data. It will start with undefined
export const CartContext = createContext<cartContextType | undefined>(
  undefined
);

const CartProvider = ({ children }: CartProviderProps) => {
  //State to hold the cart data. If savedCart exists, initialize it. If not, blank array
  const [cart, setCart] = useState<productToCart[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  //Sync cart state to Local Storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //add to cart function
  const addToCart = (productToAdd: productToCart) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.product.id === productToAdd.product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.product.id === productToAdd.product.id
            ? { ...item, qty: item.qty + productToAdd.qty } //*changed
            : item
        );
      } else {
        return [...prevCart, productToAdd]; //*changed
      }
    });
  };

  //remove from cart function
  const removeFromCart = (idToRemove: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== idToRemove)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
