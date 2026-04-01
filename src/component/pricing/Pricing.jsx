import React from "react";

const Pricing = () => {
  return (
    <div className="px-4 py-10 space-y-8">
      {/* heading */}
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* card 1 */}
        <div className="card bg-[#F9FAFC] shadow-sm flex flex-col">
          <div className="card-body flex flex-col justify-between h-full">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Starter</h2>
              <p className="text-sm text-gray-500">
                Perfect for getting started
              </p>
              <span className="text-lg font-semibold">$29/mo</span>
            </div>

            <ul className="mt-5 space-y-2 text-sm">
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Access to 10 free tools</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Basic templates</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Community support</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">1 project per month</span>{" "}
              </li>
            </ul>

            <button className="btn mt-6 rounded-full bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white">
              Get Started Free
            </button>
          </div>
        </div>

        {/* card 2 (featured) */}
        <div className="card bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white shadow-md flex flex-col relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge badge-warning px-3 py-2 text-xs">
            Most Popular
          </span>

          <div className="card-body flex flex-col justify-between h-full">
            <div className="space-y-2 mt-2">
              <h2 className="text-2xl font-bold">Pro</h2>
              <p className="text-sm text-gray-200">Best for Professionals</p>
              <span className="text-lg font-semibold">$49/mo</span>
            </div>

            <ul className="mt-5 space-y-2 text-sm">
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Access to all premium tools</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Unlimited templates</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Priority support</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Cloud sync</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Unlimited projects</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Advanced analytics</span>{" "}
              </li>
            </ul>

            <button className="btn mt-6 rounded-full bg-white text-purple-600 hover:bg-gray-100">
              Start pro Trial
            </button>
          </div>
        </div>

        {/* card 3 */}
        <div className="card bg-[#F9FAFC] shadow-sm flex flex-col">
          <div className="card-body flex flex-col justify-between h-full">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Enterprise</h2>
              <p className="text-sm text-gray-500">For teams and businesses</p>
              <span className="text-lg font-semibold">$99/mo</span>
            </div>

            <ul className="mt-5 space-y-2 text-sm">
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Everything in Pro</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Team collaboration</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Custom integrations</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">Dedicated support</span>{" "}
              </li>
              <li className="">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />{" "}
                </svg>{" "}
                <span className="">SLA guarantee</span>{" "}
              </li>
            </ul>

            <button className="btn mt-6 rounded-full bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
