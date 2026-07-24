"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const categories = ["electronics", "fashion", "books", "beauty"];

export default function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category");
  const priceParam = searchParams.get("price") || "0-100000";
  const [minPrice, maxPrice] = priceParam.split("-").map(Number);

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="space-y-6">

      {/* CATEGORY */}
      <div className="bg-white rounded-xl border p-4 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-sm">Category</h3>
          <button
            onClick={() => updateParams("category", "")}
            className="text-xs text-gray-500 hover:text-black"
          >
            Clear
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() =>
                  updateParams("category", isActive ? "" : cat)
                }
                className={`
                  px-3 py-1.5 text-xs rounded-full border transition
                  ${
                    isActive
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* PRICE */}
      <div className="bg-white rounded-xl border p-4 shadow-sm">
        <h3 className="font-semibold text-sm mb-3">Price Range</h3>

        <Slider
          value={[minPrice, maxPrice]}
          max={100000}
          step={1000}
          className="mt-4"
          onValueChange={(value) =>
            updateParams("price", `${value[0]}-${value[1]}`)
          }
        />

        <div className="flex justify-between text-xs mt-4 text-gray-600">
          <span>₹{minPrice.toLocaleString()}</span>
          <span>₹{maxPrice.toLocaleString()}</span>
        </div>

        {/* CLEAR PRICE */}
        <Button
          variant="outline"
          className="w-full mt-4 text-xs"
          onClick={() => updateParams("price", "0-100000")}
        >
          Reset Price
        </Button>
      </div>
    </div>
  );
}