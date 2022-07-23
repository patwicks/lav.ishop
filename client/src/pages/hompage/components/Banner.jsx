import React from "react";
import COLLECTION_WEBP from "../../../assets/collection.webp";
import { ButtonRegular } from "../../../components/button/ButtonRegular";
const Banner = () => {
  return (
    <div className="flex min-h-[30rem] w-full items-center justify-between bg-gradient-to-tr from-slate-200 to-brand/60 px-8 py-5 md:px-10 md:rounded-md">
      {/* text left */}
      <div className="h-full w-full md:w-1/2">
        <h4 className="text-[0.9rem] text-gray-700">Top e-commerce in PH</h4>
        <h1 className="mb-10 md:text-[3rem] text-[2.5rem] font-extrabold ">
          Selling only <br /> the <span className="text-brand">Best</span>{" "}
          things <br />
          online
        </h1>
        <ButtonRegular title="Shop now" />
      </div>
      {/* image right */}
      <div className="hidden h-full w-1/2 md:block">
        <img
          className="h-full w-full object-contain object-center"
          src={COLLECTION_WEBP}
          alt="Product Collection"
        />
      </div>
    </div>
  );
};

export default Banner;
