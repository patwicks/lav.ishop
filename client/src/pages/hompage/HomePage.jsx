import React from "react";
import AppLayout from "../AppLayout";
import Banner from "./components/Banner";

const HomePage = () => {
  return (
    <AppLayout>
      <div className="max-w-screen h-full min-h-screen w-full overflow-hidden pt-5">
        <Banner />
      </div>
      {/* <div className="h-screen"></div> */}
    </AppLayout>
  );
};

export default HomePage;
