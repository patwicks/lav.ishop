import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { data } from "../data/data";

const PreviewProduct = () => {
  return (
    <div className="container mt-10 flex flex-col flex-wrap items-center justify-between gap-y-5 p-2 md:flex-row md:p-10">
      {data?.map((item, index) => (
        <div
          className="flex w-full flex-col rounded-md bg-whitegray-200 p-5 md:w-[35rem]"
          key={index}
        >
          <div className="flex">
            <div className="w-[80%]">
              <h1 className="mb-5 text-[1.5rem] font-semibold capitalize">
                {item.name}
              </h1>
              <p>{item.description}</p>
            </div>
            <div className="w-20% flex items-center justify-center">
              <div className="h-[150px] w-[150px]">
                <img
                  className="h-full w-full object-contain object-center"
                  src={item.image}
                  alt={item.name}
                />
              </div>
            </div>
          </div>
          <div className="mt-5 w-full">
            <button className="flex items-center justify-center rounded-sm bg-[#D9D9D9] py-2 px-5 text-brand hover:bg-whitegray-300">
              Explore
              <span>
                <MdOutlineNavigateNext className="h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewProduct;
