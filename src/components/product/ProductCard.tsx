"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import StarRating from "@/components/common/StarRating";

export default function ProductCard({ product }: any) {

  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartContext not found");
  }

  const { addToCart } = cart;

  return (
    <div className="group bg-white rounded-xl border p-4 hover:shadow-lg transition-all duration-300 flex flex-col">
      
      <Link
        href={`/product/${product.id}`}
        className="flex flex-col items-center text-center flex-1"
      >
        {/* IMAGE */}
        <div className="relative w-full h-56 flex items-center justify-center overflow-hidden rounded-md">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* TITLE */}
        <h3 className="mt-4 font-medium text-sm line-clamp-2 text-gray-900">
          {product.title}
        </h3>

        {/* RATING */}
        <div className="mt-2">
          <StarRating rating={product.rating} />
        </div>

        {/* DESCRIPTION */}
        <p className="text-xs text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>
      </Link>

      {/* PRICE */}
      <p className="mt-4 font-semibold text-lg text-center text-gray-900">
        ₹{product.price.toLocaleString()}
      </p>

      {/* BUTTON */}
      <Button
        className="w-full mt-3 rounded-lg bg-black hover:bg-gray-800 text-white transition cursor-pointer"
        onClick={() => addToCart({ ...product, quantity: 1 })}
      >
        Add to Cart
      </Button>
    </div>
  );
}