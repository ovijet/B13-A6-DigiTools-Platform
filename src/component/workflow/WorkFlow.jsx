import React from "react";

const WorkFlow = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center space-y-2  w-full p-10 bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] mt-10">
        <h1 className="text-3xl font-semibold text-white">Ready to Transform Your Workflow?</h1>
        <p className="text-gray-400 text-[15px] w-[500px] text-center">
          Join thousands of professionals who are already using Digitools to
          work smarter.Start your free trial today.
        </p>
        <div className="">
          <button className="btn mr-5 rounded-full" >Explore Products</button>
          <button className="btn rounded-full bg-transparent text-white">View Pricing</button>
        </div>
        <div className="flex gap-5 text-gray-300 mt-5 text-[15px]">
          <p>14-day free trial</p>
          <li>No Credit card required</li>
          <li>cancel anytime</li>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
