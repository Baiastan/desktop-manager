import React from "react";

export function MonthlyTransactionsTable({ data, month, car }) {
  return (
    <table className="max-w-4xl w-full mx-auto bg-gray-800 border mt-5 border-gray-700 divide-y divide-gray-700">
      <thead className="bg-gray-900">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Car</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Toll Price</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
            Bridge Plaza
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
        </tr>
      </thead>
      <tbody className="bg-gray-800 divide-y divide-gray-700">
        <tr>
          <td className="px-6 py-4 text-lg whitespace-nowrap text-green font-bold">Total</td>
          <td className="px-6 py-4 whitespace-nowrap text-lg text-yell font-bold">${data[car]?.data[month]?.total}</td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-200"></td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-200">{month}</td>
        </tr>
        {data[car]?.data[month]?.items.map((row, index) => {
          return (
            <tr key={index} className="hover:bg-gray-700 transition duration-150 ease-in-out">
              <td className="px-6 py-4 whitespace-nowrap text-gray-200">{row.car_name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-200">{row.toll_price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-200">{row.bridge_plaza}</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-200">{row.transaction_date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
