"use client";

import { useContext } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CartContext } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartContext not found");
  }

  const { cartItems, removeFromCart, updateQuantity, totalPrice } = cart;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Continue Shopping
      </Link>

      
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-lg text-gray-500">Your cart is empty 🛒</p>
          <Link href="/">
            <Button className="mt-4 bg-black text-white hover:bg-gray-800">
              Go Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col md:grid md:grid-cols-[1fr_320px] gap-6">
          
          
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>

          
          <div className="border rounded-xl p-5 bg-white shadow-sm w-full max-w-md mx-auto md:mx-0">
            <h2 className="font-semibold text-lg mb-4 text-center md:text-left">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2 text-sm">
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-4 text-sm text-gray-500">
              <span>Delivery</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-4">
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>

            <Button className="w-full mt-6 bg-black text-white hover:bg-gray-800 transition">
              Proceed to Checkout
            </Button>
          </div>

        </div>
      )}
    </div>
  );
}