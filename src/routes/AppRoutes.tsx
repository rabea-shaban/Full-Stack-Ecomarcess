import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Account from "../Pages/Users/Account";
import Wishlist from "../Pages/wishlist/Wishlist";
import Root from "../components/layout/Root";
import Products from "../Pages/Products";
import ProductDetail from "../Pages/Products/ProductDetail";
import NotFound from "../Pages/Error/NotFound";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "products", Component: Products },
      { path: "products/:id", Component: ProductDetail },
    ],
  },

  {
    path: "auth",
    Component: Root,
    children: [
      { path: "login", Component: Login },
      { path: "register", Component: SignUp },
    ],
  },

  // User Pages
  {
    path: "account",
    Component: Root,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, Component: Account },
          { path: "orders", Component: () => <div>Orders</div> },
          { path: "cancellations", Component: () => <div>Cancellations</div> },
          { path: "reviews", Component: () => <div>Reviews</div> },
          { path: "Wishlist", Component: Wishlist },
          { path: "cart", Component: Cart },
          { path: "checkout", Component: Checkout },
        ],
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
