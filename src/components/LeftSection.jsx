import React from "react";
import { Link } from "react-router-dom";
function LeftSection() {
  const handleClick = () => {
    console.log("clicked");
    document;
    return <div className="h-full w-full bg-amber-900">ds</div>;
  };

  return (
    <>
      <div className="absolute h-[60%] w-[30%] left-[35%] top-[20%] p-5 bg-red-400 z-30 flex flex-col justify-start gap-10 items-center">
        <p className="text-3xl font-bold flex justify-center">
          Add Transaction
        </p>
        <div>
          <button>Income</button>
          <button>Expense</button>
        </div>
        <input
          className="h-[50px] w-[80%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-white font-bold"
          type="text"
          placeholder="Amount"
        />
        <input
          className="h-[50px] w-[80%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-white font-bold"
          type="text"
          placeholder="Description"
        />
      </div>
      <div className="h-full w-[15%] p-5 flex flex-col items-center border-r-1 bg-blue-500">
        <p className="text-3xl font-bold">TrackMint</p>
        <div className="h-[60%] w-[100%] m-[80px] flex flex-col justify-between items-center bg-amber-950 gap-2">
          <div className="h-[10%] w-[100%] rounded-2xl bg-blue-600 flex flex-row justify-center items-center">
            <button
              className="h-[50px] w-[70%] rounded-2xl flex flex-row  justify-center items-center bg-amber-600 font-bold hover:bg-amber-700 hover:cursor-pointer"
              onClick={handleClick}
            >
              Add Transaction
            </button>
          </div>
          <div className="h-[90%] w-[100%] rounded-2xl flex flex-col gap-2 pt-20 items-center bg-purple-600 font-bold">
            <Link
              className="h-[50px] w-[100%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-amber-600 font-bold"
              to="/ "
            >
              Dashboard
            </Link>
            <Link
              className="h-[50px] w-[100%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-amber-600 font-bold"
              to="/wallet"
            >
              Wallet
            </Link>
            <Link
              className="h-[50px] w-[100%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-amber-600 font-bold"
              to="/analytics"
            >
              Analytics
            </Link>
            <Link
              className="h-[50px] w-[100%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-amber-600 font-bold"
              to="/transactions"
            >
              Transactions
            </Link>
            <Link
              className="h-[50px] w-[100%] rounded-2xl flex flex-row gap-2 justify-center items-center bg-amber-600 font-bold"
              to="/settings"
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
    </>
  );
}
export default LeftSection;
