import { createContext, useContext } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartContextType {
  isOpen: boolean;
  toggleCart: () => void;
  cartItems: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
}

// Criar o Contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personalizado para consumir o contexto
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};

export default CartContext;
