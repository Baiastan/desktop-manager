import React, { useState, useEffect } from "react";

const MonthlyDropDown = ({ month, setMonth, car, data }) => {
  const [months, setMonths] = useState([]);

  useEffect(() => {
    setMonths(data[car].months);
  }, [data[car].months]);

  const handleCarChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <div className="w-full">
      <select
        value={month}
        onChange={handleCarChange}
        className=" mt-3 bg-gray-800 text-gray-200 border py-2 px-3 focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-700 focus:ring-opacity-50"
      >
        <option value="" disabled>
          Select a month
        </option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthlyDropDown;
