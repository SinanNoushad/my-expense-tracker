import React from "react";
import ProfileDropMenu from "./profileDropMenu";
function TopSection() {
  const user = JSON.parse(localStorage.getItem("LoginedUser"));
  return (
    <div className="h-[10%] w-[100%] flex flex-row justify-between items-center p-10 border-b-1 bg-green-500">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <ProfileDropMenu />
    </div>
  );
}
export default TopSection;
