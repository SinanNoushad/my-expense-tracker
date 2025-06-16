import React from "react";

function RightSection() {
  return (
    <div className="h-full w-[25%] flex flex-col bg-violet-500">
      <div className="h-[35%] w-full border-b-1 border-gray-600 bg-white p-[1%] flex flex-col items-center">
        <h1 className="text-2xl font-bold">My Cards</h1>
        <div className="h-[70%] w-[90%] flex flex-col justify-between rounded-3xl mt-3 p-[5%] bg-black text-white">
          <h1 className="font-bold mt-2 ml-2">USER NAME</h1>
          <div className="flex flex-col gap-1">
            <p className="font-bold">1234 **** **** **32</p>
            <div className="flex flex-row justify-between items-center">
              <p className="font-bold font-monaco">$123,432</p>
              <img
                src="https://img.icons8.com/color/36/mastercard.png"
                alt="e"
              />
            </div>
          </div>
        </div>
        <div className="h-[20px] w-[80%] flex flex-col justify-between rounded-b-3xl bg-gray-400" />
        <div className="h-[20px] w-[70%] flex flex-col justify-between rounded-b-3xl bg-gray-200" />
      </div>
      <div className="h-[65%] w-full bg-amber-300 p-[2%] flex flex-col items-center ">
        <div className="h-[10%] w-[90%] flex flex-row justify-between">
          <p className="text-2xl font-bold">Savings Goal</p>
          <button className="h-[60%] w-[30%] rounded-2xl flex flex-row gap-1 text-[15px] font-bold bg-amber-800 justify-center items-center hover:bg-amber-700">
            <img
              src="https://img.icons8.com/ios-glyphs/12/plus-math.png"
              alt="Add Goal"
            />
            Add Goal
          </button>
        </div>
        <div className="h-[90%] w-[90%] flex flex-col justify-evenly">
          <div className="h-[30%] w-full p-[5%] bg-amber-800 rounded-[2vh] border-1">
            dsfsd
          </div>
          <div className="h-[30%] w-full p-[5%] bg-amber-800 rounded-[2vh] border-1">
            sdfsd
          </div>
          <div className="h-[30%] w-full p-[5%] bg-amber-800 rounded-[2vh] border-1">
            sdf
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
