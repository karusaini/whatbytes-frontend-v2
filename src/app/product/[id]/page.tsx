"use client";
export const dynamic = "force-dynamic";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useContext, useState } from "react";

import { products } from "@/data/products";
import { CartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/common/StarRating";
import Reviews from "@/components/product/Reviews";
import { Minus, Plus } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const context = useContext(CartContext);
  if (!context) return null;

  const { addToCart } = context;

  const product = products.find((item) => item.id === params.id);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-500">
        Product not found
      </div>
    );
  }

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      
      <Button
        variant="outline"
        className="mb-6"
        onClick={() => router.push("/")}
      >
        ← Back to Home
      </Button>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        
        <div className="bg-white border rounded-xl p-6 flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg object-contain max-h-100 w-full"
          />
        </div>

        
        <div className="flex flex-col">
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {product.title}
          </h1>

          
          <div className="mt-2 flex items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="text-sm text-gray-500">
              ({product.rating})
            </span>
          </div>

         
          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            {product.description}
          </p>

         
          <p className="text-2xl font-semibold mt-6 text-black">
            ₹{product.price.toLocaleString()}
          </p>

          
          <p className="text-sm text-gray-500 mt-2 capitalize">
            Category: {product.category}
          </p>

         
          <div className="flex items-center gap-3 mt-5">
            <Button size="sm" variant="outline" onClick={decrease}>
              <Minus className="w-4 h-4" />
            </Button>

            <span className="w-8 text-center font-medium">
              {quantity}
            </span>

            <Button size="sm" variant="outline" onClick={increase}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          
          <Button
            className="mt-6 w-full md:w-1/2 bg-black text-white hover:bg-gray-900 transition"
            onClick={() =>
              addToCart({
                ...product,
                quantity,
              })
            }
          >
            Add to Cart
          </Button>

        </div>
      </div>

      
      <div className="mt-12">
        <Reviews />
      </div>
    </div>
  );
}