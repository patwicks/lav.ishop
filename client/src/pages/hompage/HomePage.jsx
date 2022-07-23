import React from "react";
import AppLayout from "../AppLayout";
import Banner from "./components/Banner";
import Popular from "./components/Popular";
import PreviewProduct from "./components/PreviewProduct";

const HomePage = () => {
  return (
    <AppLayout>
      <div className="max-w-screen h-full min-h-screen w-full overflow-hidden pt-5">
        <Banner />
        <PreviewProduct />
        <Popular />
      </div>
    </AppLayout>
  );
};

export default HomePage;
