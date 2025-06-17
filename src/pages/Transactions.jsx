import React from "react";
function Transactions() {
  return (
    <div className="h-full w-[75%] border-r-1 bg-amber-900 p-[1%] flex flex-col items-center">
      <label className="text-3xl font-bold m-5"> Transactions</label>
      <div className="h-[90%] w-[100%] overflow-x-auto">
        <table class="table-fixed w-full  border-collapse border border-black bg-amber-400">
          <thead className="h-[10%] z-10 bg-amber-400 border rounded-t-2xl sticky top-0 ">
            <tr>
              <th className="w-1/6 border ">Type</th>
              <th className="w-1/6 border">Amount</th>
              <th className="w-1/6 border">Category</th>
              <th className="w-1/6 border">Description</th>
              <th className="w-1/6 border">Date</th>
              <th className="w-1/6 border">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="w-1/6 border ">income</td>
              <td className="w-1/6 border ">Rs. 1000</td>
              <td className="w-1/6 border ">Salary</td>
              <td className="w-1/6 border ">Monthly</td>
              <td className="w-1/6 border ">01-01-2023</td>
              <td className="w-1/6 border ">
                <button>edit</button>
                <button>delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <table className="w-full h-screen table-fixed border-collapse  bg-amber-600 ">
        <thead className="h-[10%] z-10 bg-amber-400 border rounded-t-2xl sticky top-0 ">
          <tr>
            <th className="w-1/6 border border-black">Type</th>
            <th className="w-1/6 border border-black">Amount</th>
            <th className="w-1/6 border border-black">Category</th>
            <th className="w-1/6 border border-black ">Description</th>
            <th className="w-1/6 border border-black ">Date</th>
            <th className="w-1/6 border border-black ">Action</th>
          </tr>
        </thead>
        <tbody className="w-full h-[90%] bg-amber-50 block overflow-y-scroll">
          <tr className="text-center border">
            <td className="w-1/6 border border-black">Income</td>
            <td className="w-1/6 border border-black ">Rs. 1000</td>
            <td className="w-1/6 border border-black ">Salary</td>
            <td className="w-1/6 border border-black ">Received my salary</td>
            <td className="w-1/6 border border-black">01/01/2023</td>
            <td className="w-1/6 border border-black ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
          <tr className="text-center border">
            <td className="border border-black px-4 py-2">Income</td>
            <td className="border border-black px-4 py-2">Rs. 1000</td>
            <td className="border border-black px-4 py-2">Salary</td>
            <td className="border border-black px-4 py-2">
              Received my salary
            </td>
            <td className="border border-black px-4 py-2">01/01/2023</td>
            <td className="border border-black px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}
export default Transactions;
