"use client";

import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t mt-16">
      
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        
        
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-2xl font-bold text-black">WhatBytes</h2>
          <p className="text-sm leading-relaxed text-gray-500">
            Crafting clean and simple web experiences with a focus on usability and good design.
          </p>
        </div>

        
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-black mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-black transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-black transition">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/#products" className="hover:text-black transition">
                Products
              </Link>
            </li>
          </ul>
        </div>

        
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-black mb-3">
            Follow Us
          </h3>

          <div className="flex justify-center md:justify-start gap-4">
            
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Twitter size={20} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Github size={20} />
            </a>

          </div>
        </div>
      </div>

      
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} WhatBytes. All rights reserved.
        </div>
      </div>

    </footer>
  );
}