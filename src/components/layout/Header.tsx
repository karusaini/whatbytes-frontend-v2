"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useContext, Suspense } from "react";
import { CartContext } from "@/context/CartContext";
import SearchBar from "./SearchBar";

export default function Header() {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartContext not found");
  }

  const { cartItems } = cart;

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-3 items-center">

        {/* LEFT */}
        <div className="flex justify-start">
          <Link href="/" className="text-lg md:text-xl font-bold">
            WhatBytes
          </Link>
        </div>

        {/* CENTER (REAL CENTER 🔥) */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Suspense fallback={null}>
              <SearchBar />
            </Suspense>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-end items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black transition" />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-black text-white rounded-full">
                {cartCount}
              </Badge>
            )}
          </Link>

          <Avatar>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>

      </div>
    </header>
  );
}