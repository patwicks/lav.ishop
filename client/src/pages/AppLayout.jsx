import React, { Children } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className=" h-full w-full min-w-[280px] overflow-x-hidden md:container md:mx-auto">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
