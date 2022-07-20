import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import {
  RiSearchLine,
  RiShoppingCart2Line,
  RiUserLine,
  RiCloseLine,
} from "react-icons/ri";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Header = () => {
  const screenYPosition = useScrollPosition();
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const list = [
    { title: "Home", route: "/" },
    { title: "Products", route: "/products" },
    { title: "About", route: "/about" },
    { title: "FaQ", route: "/faq" },
  ];

  return (
    <div
      className={`flex w-full items-center justify-between bg-slate-200 py-4 transition-all duration-200 ease-in-out ${
        screenYPosition >= 50 ? `fixed top-0 px-8` : `px-4`
      }`}
    >
      {/* .left side nav */}
      <div className="flex items-center">
        <span className="mr-5 font-bold text-brand">Lav.ishop</span>
        <ul className="hidden space-x-3 text-sm font-semibold tracking-[2px] md:flex">
          {list?.map((data, index) => (
            <li
              className="decoration transition-all duration-300 hover:underline "
              key={index}
            >
              <Link className="active:text-brand" to={data.route}>
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* right side nav */}
      <div className="flex items-center justify-center gap-x-2">
        <div className="rounded-full p-1 hover:bg-white">
          <RiSearchLine className="text-xl" />
        </div>
        <div className=" relative rounded-full p-1 hover:bg-white">
          <RiShoppingCart2Line className="text-xl" />
          <div className="absolute -top-0 -right-1 h-4 w-4 rounded-full bg-brand text-center text-[0.7rem] text-white">
            5
          </div>
        </div>
        <div className="rounded-full p-1 hover:bg-white">
          <RiUserLine className="text-xl" />
        </div>
        <div
          className="block rounded-full p-1 hover:bg-white md:hidden"
          onClick={toggleMenu}
        >
          <CgMenuRight className="text-xl" />
        </div>
      </div>
      {/* mobile side menu */}
      <div
        className={`absolute top-0 bottom-0 right-0 h-screen min-w-[40vh] ${
          showMenu ? `` : `translate-x-full transform`
        }  bg-slate-300 p-5 transition-all duration-500 ease-in-out`}
      >
        <div
          className="h-8 w-8 rounded-full p-1 hover:bg-white"
          onClick={toggleMenu}
        >
          <RiCloseLine className="text-2xl " />
        </div>
        <ul className="mt-5 flex flex-col text-lg font-semibold tracking-[2px]">
          {list?.map((data, index) => (
            <li
              className="decoration my-2 transition-all duration-300 hover:underline "
              key={index}
            >
              <Link className="active:text-brand" to={data.route}>
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
