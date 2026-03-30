import React from "react";

const DisiToolCard = ({ data, cart, setCart }) => {
  let handleAddToCart = () => {
    setCart([...cart,data]);
  };

  let { name, description, price, period, tagType, features } = data;
  return (
    <div className="">
      <div className="card h-full bg-base-100 shadow-sm">
        <div className="card-body">
          <span className="badge badge-xs badge-warning ">{tagType}</span>
          <div className="">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p>{description}</p>
            <span className="text-xl">{price}</span>
            <span>{period}</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{features[0]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{features[1]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{features[2]}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{features[3]}</span>
            </li>
          </ul>
          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="btn text-white bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] btn-block rounded-full"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisiToolCard;
