import React, { use } from "react";
import DisiToolCard from "./DisiToolCard";

const DigitalTools = ({ dataApi }) => {
  let dataUse = use(dataApi);
  console.log(dataUse);
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
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-8 space-y-3">
        {dataUse.map((data) => (
          <DisiToolCard data={data} key={data.id}></DisiToolCard>
        ))}
      </div>
    </>
  );
};

export default DigitalTools;
