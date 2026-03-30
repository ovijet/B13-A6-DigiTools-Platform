import React, { use, useState } from "react";
import DisiToolCard from "./DisiToolCard";
import DigiCard from "./DigiCard";

const DigitalTools = ({ dataApi, activeTab, setActiveTab }) => {
  let dataUse = use(dataApi);
  // console.log(dataUse);
  const [cart, setCart] = useState([]);

  // const handleAddToCart = (product) => {
  //   setCart((cart) => [...cart, product]);
  // };
  // console.log(setActiveTab);
  return (
    <>
      <div className="text-center mt-15 space-y-3">
        <div>
          <h1 className="text-4xl font-semibold">Premium Digital Tools</h1>
          <p className="w-[500px] mx-auto mt-2 space-y-2">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>
      </div>
      {/* tabs */}

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box text-center rounded-full justify-center bg-transparent mt-5 border-none">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-[110px]"
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-[110px]"
         aria-label={`Cart (${cart.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "products" && (
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3 max-w-6xl mx-auto mt-8">
          {dataUse.map((data) => (
            <DisiToolCard
              data={data}
              key={data.id}
              setCart={setCart}
              cart={cart}
            />
          ))}
        </div>
      )}

      {activeTab === "cart" && <DigiCard cart={cart} />}
    </>
  );
};

export default DigitalTools;
