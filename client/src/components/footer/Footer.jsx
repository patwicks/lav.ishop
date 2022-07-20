import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex h-full w-full flex-col justify-between gap-4 border-t-4 border-brand bg-slate-200 p-4 md:h-[30vh] md:flex-row">
      <div>
        <h1>Follow us</h1>
      </div>
      <ul>
        {[
          { title: "Home", route: "/" },
          { title: "Products", route: "/product" },
          { title: "About", route: "/about" },
          { title: "FaQ", route: "/faq" },
        ].map((data, index) => (
          <li
            className="decoration font-semibold text-mainBlack hover:underline"
            key={index}
          >
            <Link to={data.route}>{data.title}</Link>
          </li>
        ))}
      </ul>
      <div>logo here</div>
    </footer>
  );
};

export default Footer;
