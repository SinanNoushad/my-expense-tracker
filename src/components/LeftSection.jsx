import React from "react";
import { Link } from "react-router-dom";
function LeftSection() {
  return (
    <div className="h-full w-[15%] p-5 flex flex-col items-center bg-blue-500">
      <p className="text-3xl font-bold">TrackMint</p>
      <div className="h-[60%] w-[100%] m-[80px] flex flex-col justify-between items-center bg-amber-950 gap-2">
        <div className="h-[10%] w-[100%] rounded-2xl bg-blue-600 flex flex-row justify-center items-center">
          <Link
            className="h-[50px] w-[70%] rounded-2xl flex flex-row  justify-center items-center bg-amber-600 font-bold"
            to="/add-transaction"
          >
            Add Transaction
          </Link>
        </div>
        <div className="h-[90%] w-[100%] rounded-2xl flex flex-col gap-2 pt-20 items-center bg-purple-600 font-bold">
          <Link
            className="h-[50px] w-[100%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-amber-600 font-bold"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="h-[50px] w-[100%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-amber-600 font-bold"
            to="/dashboard/wallet"
          >
            Wallet
          </Link>
          <Link
            className="h-[50px] w-[100%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-amber-600 font-bold"
            to="/dashboard/analytics"
          >
            Analytics
          </Link>
          <Link
            className="h-[50px] w-[100%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-amber-600 font-bold"
            to="/dashboard/transactions"
          >
            Transactions
          </Link>
          <Link
            className="h-[50px] w-[100%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-amber-600 font-bold"
            to="/dashboard/settings"
          >
            Settings
          </Link>
          <Link
            className="h-[50px] w-[100%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-amber-600 font-bold"
            to="/logout"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
