import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "./../pages/Home/Home/Home";
import ProductDetails from "./../pages/ProductDetails/ProductDetails";
import Wishlist from "./../pages/Wishlist/Wishlist";
import Products from "./../pages/Products/Products";
import Signup from "./../pages/Users/Signup";
import Login from "./../pages/Users/Login";
import Profile from "./../pages/Users/Profile";
import Cart from "./../pages/Cart/Cart";

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "product/:productId", element: <ProductDetails /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
