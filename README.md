# TechShop – React E-commerce Store

TechShop is a front-end e-commerce demo for an electronics shop. You can browse and filter products, keep a wishlist, manage a cart, create an account and place orders. Everything runs in the browser: state is kept in Redux and saved to `localStorage`, so the whole shopping flow works without a backend.

**Live demo:** _add your deployed URL here_

> Want to try it quickly? On the login page, click **Try the demo account**.

## Features

- **Product catalogue**: one data source (`src/data/products.js`) drives every page.
- **Products page** with search, category, brand, price range and in-stock filters, plus sorting. Filters live in the URL, so a filtered view can be shared or bookmarked.
- **Product details** at `/product/:slug`, with quantity selection, stock limits, a specs table and related products. These pages work on refresh and from shared links.
- **Cart** with quantity controls, stock checks, subtotal, a free-shipping threshold and an empty state.
- **Wishlist** with a heart toggle on every product and a wishlist page.
- **Checkout** with a validated shipping form, payment method choice (cash on delivery or demo online payment) and an order confirmation page.
- **Accounts**: sign up, log in, log out, a demo account, protected routes that send you back where you were after login, an editable profile and order history.
  - Passwords are stored as SHA-256 hashes in `localStorage`. This is a front-end demo, not production authentication.
- **Live counts** of cart and wishlist items in the navbar, toast notifications, a 404 page, and a page title on every route.
- **Responsive** layout from phones to desktops.

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 19, React Router 7 |
| State | Redux Toolkit, redux-persist |
| Styling | Tailwind CSS 4, daisyUI 5 |
| Extras | react-hot-toast, react-icons, react-responsive-carousel |
| Tooling | Vite 6, ESLint 9 |

## Getting started

```bash
git clone https://github.com/Swoad-11/ecommerce-site.git
cd ecommerce-site
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # production build in dist/
npm run preview    # serve the production build
npm run lint       # ESLint
```

## Project structure

```
src/
├── assets/            images, logos and icons
├── components/        reusable UI (ProductCard, Rating, QuantityControl, …)
├── data/              product catalogue, categories and brands
├── hooks/             useShopActions: cart and wishlist actions with toasts
├── layout/            Main layout (navbar, footer, toasts)
├── pages/             Home, Products, ProductDetails, Cart, Wishlist,
│                      Checkout, OrderSuccess, Users (login/signup/profile), NotFound
├── redux/
│   ├── slices/        cart, wishlist, auth, orders
│   └── store.js       store and persistence setup
└── route/Routes.jsx   all routes, including protected ones
```

## Deployment

The app is a single-page app, so the host has to serve `index.html` for every route:

- **Vercel**: `vercel.json` already rewrites all paths to `index.html`.
- **Netlify**: `public/_redirects` does the same.

Build command: `npm run build`. Output folder: `dist`.

## Notes

- Product names, prices and specs are demo data.
- No real payment is processed. "Online payment" is only a demo option.

## Roadmap

- Move products, accounts and orders to a real backend (Node/Express + MongoDB, or Firebase)
- Real authentication (Firebase Auth or JWT) and Google sign-in
- Payment gateway in test mode (Stripe or SSLCommerz)
- Product reviews and multiple images per product
- Admin dashboard to manage products and orders
