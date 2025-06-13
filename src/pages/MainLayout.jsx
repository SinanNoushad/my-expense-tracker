import React from "react";
import LeftSection from "../components/LeftSection";
import TopSection from "../components/TopSection";
import RightSection from "../components/RightSection";
import { Outlet } from "react-router-dom";
function MainPage() {
  return (
    <div className="h-screen w-screen flex   bg-gradient-to-tl from-purple-700 to-purple-500">
      <LeftSection />
      <div className="h-full w-[90%] flex flex-col bg-amber-600">
        <TopSection />
        <div className="h-[90%] w-[100%] flex flex-row">
          <Outlet />
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
