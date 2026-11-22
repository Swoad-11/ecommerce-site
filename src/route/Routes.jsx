import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Wishlist from "../pages/Wishlist/Wishlist";
import Products from "../pages/Products/Products";
import Signup from "../pages/Users/Signup";
import Login from "../pages/Users/Login";
import Profile from "../pages/Users/Profile";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const routes = [
  {
    path: "/",
    element: <Main />,
    errorElement: (
      <Main>
        <NotFound message="Something went wrong loading this page." />
      </Main>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "shop", element: <Navigate to="/products" replace /> },
      { path: "product/:slug", element: <ProductDetails /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "cart", element: <Cart /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "order-success/:orderId",
        element: (
          <ProtectedRoute>
            <OrderSuccess />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
