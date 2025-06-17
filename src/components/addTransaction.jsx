import React from "react";
import DropDownMenu from "./dropDownMenu";
import { useState } from "react";
export default function AddTransaction(props) {
  const [type, setType] = useState("Income");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  return (
    <div
      id="addTransaction"
      className={`absolute h-full w-full  justify-center items-center flex`}
    >
      <div
        className="absolute h-full w-full bg-gray-500 opacity-50 z-98"
        onClick={() => props.setShowAddTransaction(false)}
      ></div>
      <form
        className="h-[60%] w-[20%] p-5 rounded-3xl bg-white z-99 flex flex-col justify-start gap-8 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          if (!amount || !category || !description || !date) {
            alert("Please fill all the fields");
            return;
          }

          const Transaction = {
            type,
            amount,
            category,
            description,
            date,
          };

          console.log("transaction:", Transaction);
          console.log(type, amount, category, description, date);
          console.log("form submitted");

          props.setShowAddTransaction(false);
        }}
      >
        <div className="h-[50px] flex flex-row justify-end  w-[100%]">
          <label className="h-[50px] w-[80%] text-3xl font-bold flex  justify-center items-center ">
            Add Transaction
          </label>
          <button
            type="button"
            className="h-[50px] w-[40px] flex justify-center items-center hover:cursor-pointer"
            onClick={() => props.setShowAddTransaction(false)}
          >
            <img
              src="https://img.icons8.com/emoji/36/cross-mark-emoji.png"
              alt="close"
            />
          </button>
        </div>
        <div className="h-[50px] w-[80%] flex flex-row">
          <button
            type="button"
            className={`h-[50px] w-[80%] rounded-l-md border-2 border-gray-400 ${
              type === "Income" ? "bg-blue-400" : "bg-white"
            }`}
            onClick={() => setType("Income")}
          >
            Income
          </button>
          <button
            type="button"
            className={`h-[50px] w-[80%] rounded-r-md border-2 border-gray-400  ${
              type === "Expense" ? "bg-red-400" : "bg-white"
            }`}
            onClick={() => setType("Expense")}
          >
            Expense
          </button>
        </div>
        <input
          className="h-[50px]  w-[80%] pl-3 rounded-md flex flex-row gap-2 justify-center items-center bg-white font-bold border-2 border-gray-400 focus:outline-none"
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <DropDownMenu setCategory={setCategory} />
        <input
          className="h-[50px] w-[80%] pl-3 rounded-md flex flex-row gap-2 justify-center items-center bg-white font-bold border-2 border-gray-400 focus:outline-none"
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          name="date"
          className="w-[80%] h-[50px] bg-white rounded-md flex flex-row gap-2 justify-center items-center font-bold border-2 border-gray-400 focus:outline-none"
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="h-[50px] w-[80%] rounded-md flex flex-row gap-2 justify-center items-center bg-blue-400 font-bold hover:bg-blue-500 hover:cursor-pointer"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}
