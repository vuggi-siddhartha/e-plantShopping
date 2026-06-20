# e-plantShopping

## Paradise Nursery - Online Plant Shopping Application

A dynamic React-based e-commerce web application for browsing and purchasing houseplants. Built with React, Redux Toolkit, and Vite.

## Features

- **Landing Page**: Beautiful background image with company name and "Get Started" button
- **Product Listing**: 18 unique houseplants across 3 categories (Air Purifying, Aromatic Fragrant, Tropical & Exotic)
- **Shopping Cart**: Full-featured cart with add, remove, increment, decrement, and checkout functionality
- **Redux State Management**: Global cart state managed with Redux Toolkit
- **Responsive Design**: Works on desktop and mobile devices
- **Dynamic Cart Icon**: Real-time cart item count display in navbar

## Tech Stack

- React 18
- Redux Toolkit
- React Router DOM
- Vite
- GitHub Pages (deployment)

## Project Structure

```
e-plantShopping/
├── src/
│   ├── App.jsx          # Main app with landing page and routing
│   ├── App.css          # All styles including background image
│   ├── main.jsx         # Entry point with Redux Provider
│   ├── store.js         # Redux store configuration
│   ├── CartSlice.jsx    # Redux slice for cart (addItem, removeItem, updateQuantity)
│   ├── ProductList.jsx  # Product listing with categories and Add to Cart
│   ├── CartItem.jsx     # Shopping cart page with full functionality
│   └── AboutUs.jsx      # About the company page
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run deploy
```

## Categories

1. **Air Purifying Plants** - Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera
2. **Aromatic Fragrant Plants** - Lavender, Jasmine, Rosemary, Mint, Lemon Balm, Eucalyptus
3. **Tropical & Exotic Plants** - Monstera Deliciosa, Fiddle Leaf Fig, Bird of Paradise, Pothos, Calathea, ZZ Plant
