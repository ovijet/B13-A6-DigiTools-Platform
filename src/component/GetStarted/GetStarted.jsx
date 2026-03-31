import React from "react";
import logo from "/assets/user.png";
import rocket from "/assets/rocket.png"
import packag from "/assets/package.png"
const GetStarted = () => {
  return (
    <div className="space-y-3 bg-[#F9FAFC] p-5 mt-5">
      <div className="text-center mt-8">
        <h1 className="text-3xl font-semibold">Get Started in 3 Steps</h1>
        <p className="text-gray-400">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-9 mt-10">
          <div className="card w-96 bg-base-100 card-xl shadow-sm">
            <div className="card-body">
              <img
                src={logo}
                alt=""
                className="w-[70px] mx-auto border-red-400 border  rounded-full p-2"
              />
              <h2 className="text-2xl text-center">create account</h2>
              <p className="text-center text-gray-500">
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 card-xl shadow-sm">
            <div className="card-body">
              <img
                src={packag}
                alt=""
                className="w-[70px] mx-auto border-red-400 border rounded-full p-2"
              />
              <h2 className="text-2xl text-center">Choose Products</h2>
              <p className="text-center text-gray-500">
               Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 card-xl shadow-sm">
            <div className="card-body">
              <img
                src={rocket}
                alt=""
                className="w-[70px] mx-auto border-red-400 border  rounded-full p-2"
              />
              <h2 className="text-2xl text-center">Start Creating</h2>
              <p className="text-center text-gray-500">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
