import CartContext from "@/src/context/cartContext";
import React, { PropsWithChildren, Reducer, useReducer, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

type CartAction =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: number };

export const CartProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, dispatch] = useReducer<Reducer<Product[], CartAction>>(
    (state: Product[], action: CartAction) => {
      switch (action.type) {
        case "ADD":
          return [...state, action.payload];
        case "REMOVE":
          return state.filter((item) => item.id !== action.payload);
        default:
          return state;
      }
    },
    []
  );

  const toggleCart = () => setIsOpen((open) => !open);

  const addToCart = (item: Product) => dispatch({ type: "ADD", payload: item });

  const removeFromCart = (id: number) =>
    dispatch({ type: "REMOVE", payload: id });

  return (
    <CartContext.Provider
      value={{ isOpen, toggleCart, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
