import React from "react";
import logo from "/assets/user.png";
import rocket from "/assets/rocket.png";
import packag from "/assets/package.png";

const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] py-10 px-4 mt-5">
      {/* heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Get Started in 3 Steps
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
        
        {/* card 1 */}
        <div className="card bg-white shadow-sm">
          <div className="card-body relative text-center">
            <p className="absolute right-3 top-3 w-[30px] h-[30px] text-sm text-white flex items-center justify-center bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full">
              01
            </p>

            <img
              src={logo}
              alt=""
              className="w-[60px] mx-auto bg-[#c8bbea] rounded-full p-2"
            />

            <h2 className="text-xl font-semibold">Create Account</h2>
            <p className="text-gray-500 text-sm">
              Create your account in just a few steps and get started instantly.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="card bg-white shadow-sm">
          <div className="card-body relative text-center">
            <p className="absolute right-3 top-3 w-[30px] h-[30px] text-sm text-white flex items-center justify-center bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full">
              02
            </p>

            <img
              src={packag}
              alt=""
              className="w-[60px] mx-auto bg-[#c8bbea] rounded-full p-2"
            />

            <h2 className="text-xl font-semibold">Choose Products</h2>
            <p className="text-gray-500 text-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        {/* card 3 */}
        <div className="card bg-white shadow-sm">
          <div className="card-body relative text-center">
            <p className="absolute right-3 top-3 w-[30px] h-[30px] text-sm text-white flex items-center justify-center bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] rounded-full">
              03
            </p>

            <img
              src={rocket}
              alt=""
              className="w-[60px] mx-auto bg-[#c8bbea] rounded-full p-2"
            />

            <h2 className="text-xl font-semibold">Start Using</h2>
            <p className="text-gray-500 text-sm">
              Get instant access and start using your tools right away.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GetStarted;