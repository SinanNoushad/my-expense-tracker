import React from "react";
import LeftSection from "../components/LeftSection";
import TopSection from "../components/TopSection";
import RightSection from "../components/RightSection";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <div className="h-screen w-screen flex   bg-white">
      <LeftSection />
      <div className="h-full w-[90%] flex flex-col">
        <TopSection />
        <div className="h-[90%] w-[100%] flex flex-row ">
          <Outlet />
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
