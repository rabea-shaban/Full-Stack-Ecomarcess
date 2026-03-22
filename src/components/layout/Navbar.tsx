import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  StarIcon,
  UserCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import type { RootState } from "../../App/store";
import { useSelector } from "react-redux";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

const userMenu = [
  {
    name: "Manage My Account",
    icon: UserCircleIcon,
    href: "/account",
  },
  {
    name: "My Orders",
    icon: ShoppingBagIcon,
    href: "/account/orders",
  },
  {
    name: "My Cancellations",
    icon: XCircleIcon,
    href: "/account/cancellations",
  },
  {
    name: "My Reviews",
    icon: StarIcon,
    href: "/account/reviews",
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");

  // Wishlist Count
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const updateWishlist = () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlistCount(wishlist.length);
    };

    updateWishlist();

    window.addEventListener("wishlistUpdated", updateWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", updateWishlist);
    };
  }, []);
  const cart = useSelector((state: RootState) => state.cart.items);

  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  return (
    <header className="w-full sticky top-0 z-20">
      {/* Top Bar */}
      <div className="bg-black text-white text-center text-sm py-2">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="underline ml-2 cursor-pointer">Shop Now</span>
        <select className="bg-dark border-none text-white ml-2">
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="fr">French</option>
        </select>
      </div>

      {/* Navbar */}
      <div className="bg-white border-b border-[#ccc]">
        <Container className="flex items-center justify-between py-4 px-6">
          {/* Mobile Toggle */}
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Bars3Icon className="w-7 h-7" />
          </button>

          {/* Logo */}
          <h1 className="text-2xl font-bold">Exclusive</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.href}>
                {item.name}
              </Link>
            ))}

            {!token && (
              <>
                <Link to="/auth/register">Sign Up</Link>
                <Link to="/auth/login">Login</Link>
              </>
            )}
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

            {/* Wishlist */}
            <Link to="/account/wishlist" className="relative cursor-pointer">
              <HeartIcon className="w-6 h-6" />

              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link className="relative" to="/account/cart">
              <ShoppingCartIcon className="w-6 h-6 cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}
            {token && (
              <Popover className="relative">
                <PopoverButton>
                  <div className="bg-[#DB4444] text-white rounded-full p-1">
                    <UserCircleIcon className="w-6 h-6 cursor-pointer" />
                  </div>
                </PopoverButton>

                <PopoverPanel className="absolute right-0 mt-3 w-56 rounded-xl bg-gradient-to-b from-gray-700 to-gray-900 text-white shadow-lg p-3">
                  <div className="flex flex-col gap-2">
                    {userMenu.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => navigate(item.href)}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition"
                      >
                        <item.icon className="w-5 h-5" />
                        {item.name}
                      </button>
                    ))}

                    <button
                      onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        navigate("/auth/login");
                      }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-red-500/30 transition"
                    >
                      <IoMdLogOut className="w-5 h-5" />
                      Logout
                    </button>
                  </div>
                </PopoverPanel>
              </Popover>
            )}
          </div>
        </Container>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 z-50 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>

          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-4 text-lg">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.href}>
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
