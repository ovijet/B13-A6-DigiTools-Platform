import React from "react";

const WorkFlow = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center text-center space-y-4 p-6 md:p-10 w-full bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)]">
        {/* heading */}
        <h1 className="text-xl md:text-3xl font-semibold text-white">
          Ready to Transform Your Workflow?
        </h1>

        {/* description */}
        <p className="text-gray-200 text-sm md:text-base max-w-[500px]">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn rounded-full px-6">Explore Products</button>
          <button className="btn rounded-full bg-transparent text-white border border-white hover:bg-white hover:text-black transition">
            View Pricing
          </button>
        </div>

        {/* footer points */}
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-200 list-disc list-inside text-sm mt-3">
          <li>14-day free trial</li>
          <li>No credit card required</li>
          <li>Cancel anytime</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkFlow;
