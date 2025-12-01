import React, { useState } from "react";
import logo from "../assets/rebirth.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-4 w-full py-4">
      <div className="flex bg-black justify-between items-center px-6 md:px-20 py-6 rounded-2xl">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="logo" className="h-10 cursor-pointer" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          <a href="/" className="text-base text-white hover:text-amber-600 transition">
            Home
          </a>
          <a
            href="/all-products"
            className="text-base text-white hover:text-amber-600 transition"
          >
            Product
          </a>
        </ul>

        {/* Desktop Search */}
        <div className="relative hidden md:block w-80">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 text-gray-400 rounded-xl border border-[#D4D4D4] focus:outline-none transition"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-white"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        {/* Mobile Icons */}
        <div className="flex gap-5 md:hidden">
          {/* Mobile Search Button */}
          <svg
            className="text-2xl bg-black text-white p-2 cursor-pointer"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          {/* Mobile Menu Button */}
          <svg
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl bg-black text-white p-2 cursor-pointer"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-4 md:hidden">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-5 py-4 rounded-xl border border-gray-400 focus:outline-none"
        />
      </div>

      {/*  Mobile Menu Functional */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-20"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Animated Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-black text-white shadow-xl p-6 z-30 transition-all duration-300">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-right w-full mb-6 text-white"
            >
              ✕
            </button>

            <a
              href="/"
              className="block py-3 text-lg font-medium hover:text-amber-600 transition"
            >
              Home
            </a>
            <a
              href="/all-products"
              className="block py-3 text-lg font-medium hover:text-amber-600 transition"
            >
              Product
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
