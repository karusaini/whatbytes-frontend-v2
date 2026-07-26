"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) setCartItems(JSON.parse(stored));
    } catch {
      console.error("Failed to parse cart data");
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  
  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      if (exists) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }

      return [...prev, item];
    });
  };

 
  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

 
  const clearCart = () => {
    setCartItems([]);
  };

  
  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export type { CartItem as CartItemType }; 