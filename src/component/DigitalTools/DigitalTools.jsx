// DigitalTools.jsx
import React, { use } from "react";
import DisiToolCard from "./DisiToolCard";
import DigiCard from "./DigiCard";

const DigitalTools = ({ dataApi, activeTab, setActiveTab, cart, setCart }) => {
  let dataUse = use(dataApi);

  return (
    <>
      {/* Header */}
      <div className="text-center mt-16 space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Premium Digital Tools
        </h1>

        <p className="max-w-[500px] w-full mx-auto mt-2 text-sm md:text-base">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-box justify-center bg-transparent mt-5 border-none">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full px-4 py-2"
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full px-4 py-2"
          aria-label={`Cart (${cart.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {/* Products Grid */}
      {activeTab === "products" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto mt-8 px-4">
          {dataUse.map((data) => (
            <DisiToolCard
              key={data.id}
              data={data}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      )}

      {/* Cart */}
      {activeTab === "cart" && (
        <div className="max-w-6xl mx-auto mt-8 px-4">
          <DigiCard cart={cart} setCart={setCart} />
        </div>
      )}
    </>
  );
};

export default DigitalTools;
