import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Sign Up",
    href: "/auth/Register",
  },
  {
    name: "Login",
    href: "/auth/login",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-20 ">
      {/* Top Bar */}
      <div className="bg-black text-white text-center text-sm py-2">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="underline ml-2 cursor-pointer">Shop Now</span>
        {/* Language Selector */}
        <select className="bg-dark border-none text-white ml-2">
          <option className="bg-dark text-white" value="en">
            English
          </option>
          <option className="bg-dark text-white" value="ar">
            Arabic
          </option>
          <option className="bg-dark text-white" value="fr">
            French
          </option>
        </select>
      </div>

      {/* Navbar */}
      <div className="bg-white border-b border-[#ccc] ">
        <Container className=" flex items-center justify-between py-4 px-6">
          {/* Mobile Toggle */}
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Bars3Icon className="w-7 h-7" />
          </button>

          {/* Logo */}
          <h1 className="text-2xl font-bold">Exclusive</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.href || "/"}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-5">
            {/* Search */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 rounded-md pl-4 pr-10 py-2 text-sm outline-none"
              />
              <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-2.5 text-gray-500" />
            </div>

            <HeartIcon className="w-6 h-6 cursor-pointer" />
            <ShoppingCartIcon className="w-6 h-6 cursor-pointer" />
          </div>
        </Container>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 z-50 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>

          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-4 text-lg">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.href || "/"}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40"
        />
      )}
    </header>
  );
}
