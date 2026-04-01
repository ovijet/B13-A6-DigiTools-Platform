import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const Header = ({ cart }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-10 px-4">

      {/* LEFT */}
      <div className="navbar-start">
        <a className="font-bold bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent text-2xl md:text-3xl">
          DigiTools
        </a>
      </div>

      {/* CENTER (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 text-lg">
          <li>Products</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-2 md:gap-3">

        {/* MOBILE MENU */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-7 md:w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content mt-3 right-0 w-56 p-2 shadow bg-base-100 rounded-box z-10">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>

            <div className="divider my-1"></div>

            <div className="flex flex-col gap-2 p-2">
              <div className="flex items-center gap-2">
                <LuShoppingCart className="text-xl" />
                <span>Cart ({cart.length})</span>
              </div>

              <button className="btn btn-sm">Login</button>

              <button className="btn btn-sm bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white rounded-full">
                Get Started
              </button>
            </div>
          </ul>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <LuShoppingCart className="text-xl md:text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          <p className="cursor-pointer text-sm md:text-base">Login</p>

          <button className="btn btn-sm md:btn-md rounded-full bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Header;