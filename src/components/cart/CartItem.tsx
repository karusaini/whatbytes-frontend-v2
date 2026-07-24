"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trash2 } from "lucide-react";

type CartItemProps = {
  item: {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
};

export default function CartItem({
  item,
  onRemove,
  onUpdateQuantity,
}: CartItemProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border rounded-xl p-4 items-center sm:items-start bg-white shadow-sm">

      {/* IMAGE */}
      <Image
        src={item.image}
        alt={item.title}
        width={90}
        height={90}
        className="rounded-md object-cover"
      />

      {/* INFO */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-medium text-base">{item.title}</h3>
        <p className="text-gray-600 mt-1">₹{item.price}</p>
      </div>

      {/* QUANTITY */}
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          className="w-8 h-8"
          onClick={() =>
            onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
          }
        >
          -
        </Button>

        <span className="w-8 text-center font-medium">
          {item.quantity}
        </span>

        <Button
          size="sm"
          variant="outline"
          className="w-8 h-8"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </Button>
      </div>

      {/* REMOVE */}
      <Button
        size="icon"
        variant="ghost"
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:bg-red-50 hover:text-red-600 transition"
      >
        <Trash2 className="w-4 h-4" />
      </Button>

    </div>
  );
}