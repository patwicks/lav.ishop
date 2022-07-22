import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import LOGO from "../../assets/lav-logo.webp";

const link = [
  { title: "Home", route: "/" },
  { title: "Products", route: "/product" },
  { title: "About", route: "/about" },
  { title: "FaQ", route: "/faq" },
];
const social = [
  {
    name: "Facebook",
    link: `https://www.facebook.com`,
    icon: <FaFacebookSquare />,
  },
  {
    name: "Instagram",
    link: `https://www.instagram.com`,
    icon: <FaInstagramSquare />,
  },
  {
    name: "Twitter",
    link: `https://www.twitter.com`,
    icon: <FaTwitterSquare />,
  },
  {
    name: "Youtube",
    link: `https://www.youtube.com`,
    icon: <FaYoutubeSquare />,
  },
];
const Footer = () => {
  return (
    <>
      <footer className="flex h-full w-full flex-col justify-between gap-4 border-t-4 border-brand bg-slate-200 p-4 md:h-[30vh] md:flex-row">
        <div>
          <h1 className="text-md mb-2 font-bold">Follow us</h1>
          <ul>
            {social?.map((data, index) => (
              <li key={index}>
                <div className="flex items-center gap-1">
                  <div>{data.icon}</div>
                  <a
                    className="decoration-slice hover:underline"
                    href={data.link}
                    target="_blank"
                  >
                    {data.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul>
          <h1 className="text-md mb-2 font-bold">Navigation</h1>
          {link?.map((data, index) => (
            <li className="decoration hover:underline" key={index}>
              <Link to={data.route}>{data.title}</Link>
            </li>
          ))}
        </ul>
        <div>
          <div className="h-[30px] w-[150px]">
            <img
              className="h-full w-full object-contain object-center"
              src={LOGO}
              alt="lav.ishop logo"
            />
          </div>
        </div>
      </footer>
      <div className="flex w-full text-sm items-center justify-center bg-slate-300 p-1 text-mainBlack">
        &copy; Lav.ishop 2022. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
