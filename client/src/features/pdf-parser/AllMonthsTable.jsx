import React from "react";

const AllMonthsTable = ({ data, car }) => {
  const AllMonths = (data) => {
    return Object.keys(data).map((month) => {
      const total = data[month].total;
      return (
        <tr key={month} className="hover:bg-gray-700 transition duration-150 ease-in-out">
          <td className="px-6 py-4 whitespace-nowrap text-gray-200">{month}</td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-200">${total.toFixed(2)}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1 className="text-center font-bold mt-4 mb-4 text-gray-300 text-2xl capitalize">{car}</h1>
      <table className="max-w-4xl w-full mx-auto bg-gray-800 border mt-5 border-gray-700 divide-y divide-gray-700">
        <thead className="bg-gray-900">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Month</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Toll Price
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {AllMonths(data.data)}
          <tr className="hover:bg-gray-700 bg-gray-700 transition duration-150 ease-in-out">
            <td className="px-6 py-4 whitespace-nowrap text-gray-200">Total</td>
            <td className="px-6 py-4 whitespace-nowrap text-yell font-bold text-xl">${data.total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllMonthsTable;
