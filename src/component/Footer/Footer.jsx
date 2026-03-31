import React from "react";
import { FaFacebook, FaYoutube, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-[#101727] text-white  sm:footer-horizontal text-base-content p-10">
      <div className="footer flex justify-around ">
        <nav>
          <h1 className="text-3xl ">DigiTools</h1>
          <p className="w-[300px]">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title ">Social</h6>
          <div className="flex text-2xl gap-3 ">
            <FaFacebook />
            <FaYoutube />
            <FaGithub />
          </div>
        </nav>
      </div>

      <hr className="mt-8 text-gray-600" />
      <div className="flex justify-between items-center mt-8">
        <p className="text-gray-500">&copy; 2026 Digitools. All rights reserved.</p>
        <div className="space-x-7 text-gray-500">
          <a>Privacy Policy</a>
          <a>Terms Of Service</a>
          <a>Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
