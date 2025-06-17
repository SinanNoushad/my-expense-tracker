import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddTransaction from "./addTransaction";
function LeftSection() {
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  // const handleClick = () => {
  //   console.log("clicked");
  //   return <div className="h-screen w-screen"></div>;
  // };

  return (
    <>
      {showAddTransaction && (
        <AddTransaction setShowAddTransaction={setShowAddTransaction} />
      )}
      <div className="h-full w-[15%] p-5 flex flex-col items-center border-r-1 bg-white">
        <p className="text-3xl font-bold">TrackMint</p>
        <div className="h-[60%] w-[100%] m-[80px] flex flex-col justify-between items-center bg-white gap-2">
          <div className="h-[10%] w-[100%] rounded-2xl bg-white flex flex-row justify-center items-center">
            <button
              className="h-[50px] w-[70%] rounded-2xl flex flex-row  justify-center items-center bg-amber-600 font-bold hover:bg-amber-700 hover:cursor-pointer"
              onClick={() => setShowAddTransaction(true)}
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
          </div>
        </div>
      </div>
    </>
  );
}
export default LeftSection;
