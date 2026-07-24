"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  // ✅ Initialize query from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("search") || "");
  }, []);

  // ✅ Update URL with debounce (no dependency error)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);

      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }

      router.replace(`/?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, router]);

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-lg">
        
        {/* icon */}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

        {/* input */}
        <Input
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-4 h-10 rounded-full border-gray-300 focus:border-black focus:ring-1 focus:ring-black transition"
        />
      </div>
    </div>
  );
}