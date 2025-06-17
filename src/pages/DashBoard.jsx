import React from "react";
import profileUrl from "../assets/profile.png";
import { Link } from "react-router-dom";
import EchartsGraph from "../features/echartsGraph";
import IncomeExpenseChart from "../features/echartsDualGraph";
function Dashboard() {
  const user = JSON.parse(localStorage.getItem("LoginedUser"));
  return (
    <div className="h-full w-[75%] border-r-1 p-[1%] pt-2">
      <div className="flex flex-row gap-2 bg-amber-400 items-center">
        <img src={profileUrl} alt="sd" className="w-[40px] rounded-3xl" />
        <p className="font-bold">Good Morning, {user.username}</p>
      </div>
      <div className="h-[20%] w-[100%] p-[1%] flex flex-row justify-evenly">
        <div className="h[100%] w-[30%] bg-blue-200 rounded-2xl flex flex-col justify-center items-center">
          <div className="h-[55%] w-[90%] flex flex-row justify-center items-center">
            <p className="h-[40%] w-[15%] rounded-2xl text-[12px] font-bold flex flex-row justify-center items-center bg-white text-blue-600">
              +8.8%
            </p>
            <div className="h-[80%] w-[80%]">
              <EchartsGraph
                lineColor="#2563eb"
                gradientFrom="rgb(37,99,235, 0.3)"
                gradientTo="rgb(37,99,235, 0)"
              />
            </div>
          </div>
          <div className="h-[45%] w-[90%] flex flex-col justify-center">
            <p className="font-bold text-[15px]">Total Income</p>
            <p className="font-bold text-3xl">Rs.213234</p>
          </div>
        </div>
        <div className="h[100%] w-[30%] bg-red-200 rounded-2xl flex flex-col justify-center items-center">
          <div className="h-[55%] w-[90%] flex flex-row justify-center items-center">
            <p className="h-[40%] w-[15%] rounded-2xl text-[12px] font-bold flex flex-row justify-center items-center bg-white text-red-600">
              +12.8%
            </p>
            <div className="h-[80%] w-[80%]">
              <EchartsGraph
                lineColor="#dc2626"
                gradientFrom="rgb(220,38,38,0.3)"
                gradientTo="rgb(220,38,38,0)"
              />
            </div>
          </div>
          <div className="h-[45%] w-[90%] flex flex-col justify-center">
            <p className="font-bold text-[15px]">Total Expense</p>
            <p className="font-bold text-3xl">Rs.342334</p>
          </div>
        </div>
        <div className="h[100%] w-[30%] bg-green-200 rounded-2xl flex flex-col justify-center items-center">
          <div className="h-[55%] w-[90%] flex flex-row justify-center items-center">
            <p className="h-[40%] w-[15%] rounded-2xl text-[12px] font-bold flex flex-row justify-center items-center bg-white text-green-600">
              +18.8%
            </p>
            <div className="h-[80%] w-[80%]">
              <EchartsGraph />
            </div>
          </div>
          <div className="h-[45%] w-[90%] flex flex-col justify-center">
            <p className="font-bold text-[15px]">Total Profit</p>
            <p className="font-bold text-3xl">Rs.122334</p>
          </div>
        </div>
      </div>
      <div className="h-[40%] w-[100%] rounded-3xl border-1 p-[1%] flex flex-col border-gray-500  bg-red-400">
        <div className="flex flex-row justify-between">
          <p className="font-bold">Analysis</p>
          <Link
            className="font-bold bg-amber-500 h-[30px] w-[100px] rounded-2xl flex flex-row justify-center items-center"
            to="/analytics"
          >
            See More
          </Link>
        </div>
        <div className="h-[90%] w-[100%] bg-amber-300">
          <IncomeExpenseChart />
        </div>
      </div>
      <div className="h-[35%] w-[100%] p-[1%] rounded-3xl border-1 flex flex-col border-gray-500 mt-2  bg-green-400">
        <div className="flex flex-row justify-between">
          <p className="font-bold">Transaction History</p>
          <Link
            className="font-bold bg-amber-500 h-[30px] w-[100px] rounded-2xl flex flex-row justify-center items-center"
            to="/transactions"
          >
            See More
          </Link>
        </div>
        <div className="h-[90%] w-[100%] bg-amber-300"></div>
      </div>
    </div>
  );
}

export default Dashboard;
