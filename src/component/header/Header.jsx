import React from "react";
// import { CiShoppingCart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

const Header = ({ cart }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="w-full max-w-6xl mx-auto flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>Products</li>
              <li>Features</li>
              <li>pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <a className=" font-bold bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent text-4xl font-bold text-3xl">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-lg">
            <li>Products</li>
            <li>Features</li>
            <li>pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <div className="relative">
            <LuShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <p>Login</p>
          <a
            href="#"
            className="btn rounded-full bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
