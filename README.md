#  WhatBytes - Product Listing App

A modern and responsive product listing web app built using **Next.js 16**, **Tailwind CSS**, and **ShadCN UI**.

---

##  Live Demo
https://whatbytes-frontend-assignment-drab.vercel.app

##  Github repo
 https://github.com/karusaini/whatbytes-frontend-assignment

---

##  Features

-  Product listing with clean UI
-  Search functionality (URL-based filtering)
-  Product detail page
-  Ratings & customer reviews
-  Add to cart with quantity control
-  Cart state management using Context API
-  Fully responsive design
-  Modern UI (no clutter, minimal design)

---

##  Tech Stack

- **Next.js 16 (App Router)**
- **React (Client Components)**
- **Tailwind CSS**
- **ShadCN UI**
- **Lucide Icons**
- **Context API (State Management)**

---

## Folder Structure

src/
┣ app/
┃ ┣ cart/
┃ ┃ ┗ page.tsx
┃ ┗ product/
┃   ┗ [id]/
┃     ┗ page.tsx
┃
┣ components/
┃ ┣ cart/
┃ ┣ common/
┃ ┣ home/
┃ ┣ layout/
┃ ┗ product/
┃
┣ context/
┃ ┗ CartContext.tsx
┃
┣ data/
┃ ┗ products.ts
┃
┣ lib/



---

## Installation & Setup

```bash
# Clone repo
git clone https://github.com/karusaini/whatbytes-frontend-assignment.git

# Go to project
cd your-repo

# Install dependencies
npm install

# Run dev server
npm run dev


Key Implementations:

1. Search Functionality
Uses URL query params (?search=)
Debounced input for better UX

2. Cart System
Built using React Context API
Supports:
Add to cart
Quantity management
Global state

3. Responsive Design
Mobile-first approach
Grid-based layout
Clean spacing and typography

UI Highlights:

Centered search bar
Minimal header with cart badge
Clean product cards
Modern footer with social icons

🙌 Author
Karina Saini


Show Your Support

If you like this project, give it a ⭐ on GitHub!