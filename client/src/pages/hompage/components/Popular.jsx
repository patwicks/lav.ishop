import React from "react";
import { dataPopular } from "../data/dataPopular";
const Popular = () => {
  return (
    <div className="my-10 p-2">
      <h1 className="text-xl font-semibold">Most popular</h1>
      <div className="container mt-10 flex flex-wrap justify-center gap-5 rounded-sm p-5 md:p-0">
        {dataPopular.map((data, index) => (
          <div className="flex h-[25rem] w-[18.75rem] flex-col hover:bg-whitegray-200 p-2" key={index}>
            <div className="flex h-2/3 w-full items-center justify-center">
              <img
                className="h-[70%] w-[70%] object-contain object-center"
                src={data.image}
                alt={data.name}
              />
            </div>
            <p className="truncate text-sm font-normal text-whitegray-500">
              {data.desription}
            </p>
            <h1 className="my-3 text-lg text-brand">₱ {data.price}</h1>
            <button className="w-full bg-whitegray-300 py-2">Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
