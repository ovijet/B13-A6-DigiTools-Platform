import React from "react";
import { FaFacebook, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white p-10">
      {/* Main Footer */}
      <div className="footer flex flex-wrap justify-between gap-8 md:justify-around">
        {/* Brand */}
        <nav className="flex-1 min-w-[200px]">
          <h1 className="text-3xl font-bold mb-3">DigiTools</h1>
          <p className="text-gray-400 max-w-[300px]">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </nav>

        {/* Product */}
        <nav className="flex-1 min-w-[150px]">
          <h6 className="footer-title mb-2 font-semibold">Product</h6>
          <div className="flex flex-col gap-1">
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </div>
        </nav>

        {/* Company */}
        <nav className="flex-1 min-w-[150px]">
          <h6 className="footer-title mb-2 font-semibold">Company</h6>
          <div className="flex flex-col gap-1">
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </div>
        </nav>

        {/* Resources */}
        <nav className="flex-1 min-w-[150px]">
          <h6 className="footer-title mb-2 font-semibold">Resources</h6>
          <div className="flex flex-col gap-1">
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </div>
        </nav>

        {/* Social */}
        <nav className="flex-1 min-w-[150px]">
          <h6 className="footer-title mb-2 font-semibold">Social</h6>
          <div className="flex gap-3 text-2xl mt-1">
            <FaFacebook className="hover:text-blue-600 transition" />
            <FaYoutube className="hover:text-red-600 transition" />
            <FaGithub className="hover:text-gray-400 transition" />
          </div>
        </nav>
      </div>

      <hr className="mt-8 border-gray-700" />

      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3 text-gray-500 text-sm">
        <p>&copy; 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-5">
          <a className="hover:text-white transition">Privacy Policy</a>
          <a className="hover:text-white transition">Terms Of Service</a>
          <a className="hover:text-white transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;