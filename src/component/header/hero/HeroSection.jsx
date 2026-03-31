import React from "react";
import logo from "/assets/banner.png";
import { CiPlay1 } from "react-icons/ci";
import Img from "/assets/Rectangle.png"

const Hero = () => {
  return (
    <>
      <div className=" grid md:grid-cols-2 items-center gap-5 max-w-6xl mx-auto min-h-[90vh]">
        <div className="space-y-3">
          <div className="flex-row-reverse">
            <h2 className="bg-[#c8bbea] text-[rgba(79,57,246,1)] flex gap-2 items-center px-4 py-1 rounded-full w-[300px]">
              <img src={Img} alt="" /> New: AI-Powered Tools Available
            </h2>
          </div>
          <div>
            <h1 className="text-5xl font-semibold space-y-2">
              Supercharge Your Digital Workflow
            </h1>
          </div>
          <p className="text-gray-500 space-y-2">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="gap-3">
            <button className="btn gap-3 rounded-full w-[150px] bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)]  text-white">
              Explore
            </button>
            <button className="btn ml-5 rounded-full border border-[rgba(79,57,246,1)] w-[150px] bg-clip-text text-transparent  bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] ">
              <CiPlay1 className="text-[rgba(79,57,246,1)] text-lg font-bold" />{" "}
              Watch Demo
            </button>
          </div>
        </div>
        <div className="right w-[70%] mx-auto mt-20">
          <img src={logo} alt="" className="" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] h-30 text-white">
        <div>
          <h1 className="text-4xl font-bold mr-9">50k+</h1>
          <p className="text-md text-gray-300">Active Users</p>
          
        </div>
        <div>
          <h1 className="text-4xl font-bold mr-9">200k+</h1>
          <p className="text-md text-gray-300">Premium Tools</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold mr-9">4.9</h1>
          <p className="text-md text-gray-300">Rating</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
