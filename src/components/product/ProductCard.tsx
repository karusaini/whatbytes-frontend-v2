"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useContext, useState, useRef } from "react";
import { CartContext } from "@/context/CartContext";
import StarRating from "@/components/common/StarRating";
import toast from "react-hot-toast";

export default function ProductCard({ product }: any) {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("CartContext not found");

  const { addToCart } = cart;

  const [added, setAdded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    setAdded(true);
    toast.success("Added to cart 🛒");

    if (navigator.vibrate) navigator.vibrate(100);

    const cartIcon = document.getElementById("cart-icon");
    const img = imgRef.current;

    if (img && cartIcon) {
      const imgRect = img.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();

      const flyingImg = img.cloneNode(true) as HTMLElement;
      flyingImg.style.position = "fixed";
      flyingImg.style.top = `${imgRect.top}px`;
      flyingImg.style.left = `${imgRect.left}px`;
      flyingImg.style.width = `${imgRect.width}px`;
      flyingImg.style.height = `${imgRect.height}px`;
      flyingImg.style.transition = "all 0.8s ease-in-out";
      flyingImg.style.zIndex = "9999";

      document.body.appendChild(flyingImg);

      setTimeout(() => {
        flyingImg.style.top = `${cartRect.top}px`;
        flyingImg.style.left = `${cartRect.left}px`;
        flyingImg.style.width = "40px";
        flyingImg.style.height = "40px";
        flyingImg.style.opacity = "0.5";
      }, 10);

      setTimeout(() => {
        flyingImg.remove();
      }, 800);
    }

    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-xl border p-4 hover:shadow-lg transition-all duration-300 flex flex-col">
      <Link
        href={`/product/${product.id}`}
        className="flex flex-col items-center text-center flex-1"
      >
        {/* 👇 ref added here */}
        <div
          ref={imgRef}
          className="relative w-full h-56 flex items-center justify-center overflow-hidden rounded-md"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <h3 className="mt-4 font-medium text-sm line-clamp-2 text-gray-900">
          {product.title}
        </h3>

        <div className="mt-2">
          <StarRating rating={product.rating} />
        </div>

        <p className="text-xs text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>
      </Link>

      <p className="mt-4 font-semibold text-lg text-center text-gray-900">
        ₹{product.price.toLocaleString()}
      </p>
      <Button
        className="w-full mt-3 rounded-lg bg-black hover:bg-gray-800 text-white transition-all duration-300 cursor-pointer active:scale-95"
        onClick={handleAddToCart}
      >
        {added ? "Added ✓" : "Add to Cart"}
      </Button>
    </div>
  );
}
