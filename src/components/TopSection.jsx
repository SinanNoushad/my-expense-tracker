import React from "react";
import profileUrl from "../assets/profile.png";
function TopSection() {
  const user = JSON.parse(localStorage.getItem("LoginedUser"));
  return (
    <div className="h-[10%] w-[100%] flex flex-row justify-between items-center p-10 border-b-1 bg-green-500">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <a
        href="#"
        className="h-[50px] w-[150px] flex flex-row gap-2 justify-center items-center bg-amber-600"
      >
        <img src={profileUrl} alt="sd" className="w-[40px] rounded-3xl" />
        <p className="font-bold">{user.username}</p>
      </a>
    </div>
  );
}
export default TopSection;
