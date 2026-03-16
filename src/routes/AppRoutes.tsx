import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import AuthLayout from "../components/layout/AuthLayout";
import Root from "../components/layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },

  {
    path: "auth",
    Component: AuthLayout,
    children: [
      { path: "login", Component: () => <h1>Login</h1> },
      { path: "register", Component: () => <h1>Register</h1> },
    ],
  },
]);

export default router;
