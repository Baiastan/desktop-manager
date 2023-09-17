import { MonthlyTransactionsTable } from "./MonthlyTransactionsTable";
import React, { useState, useEffect } from "react";
import CarDropdown from "./CarDropDown";
import MonthlyFilter from "./MonthlyDropDown";
import AllMonthsTable from "./AllMonthsTable";

const Table = ({ data }) => {
  const [car, setCar] = useState("prius");
  const [cars, setCars] = useState([]);

  console.log(data);

  const lastIndex = data[car].months.length - 1;
  const lastMonth = data[car].months[lastIndex];
  const [showMonths, setShowMonths] = useState(false);
  const [allCars, setAllCars] = useState(false);
  const [total, setTotal] = useState();

  useEffect(() => {
    let sum = 0;

    for (const key in data) {
      sum += data[key].total;
    }

    setTotal(sum);
  }, [data]);

  const [month, setMonth] = useState(lastMonth);

  return (
    <div>
      <div className="flex justify-around mt-5">
        <CarDropdown setCar={setCar} car={car} data={data} cars={cars} setCars={setCars} />
        <MonthlyFilter data={data} car={car} setMonth={setMonth} month={month} />
        <div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="showMonthsCheckbox"
              checked={showMonths}
              onChange={() => {
                setShowMonths((prev) => !prev);
                setAllCars(false);
              }}
              className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
            />
            <label htmlFor="showMonthsCheckbox" className="ml-2 text-gray-200 cursor-pointer">
              Months
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="showAllCarsCheckbox"
              checked={allCars}
              onChange={() => {
                setAllCars((prev) => !prev);
                setShowMonths(false);
              }}
              className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
            />
            <label htmlFor="showAllCarsCheckbox" className="ml-2 text-gray-200 cursor-pointer">
              All cars
            </label>
          </div>
        </div>
      </div>
      {allCars && (
        <div className="flex justify-between items-center hover:bg-gray-700 transition duration-150 ease-in-out w-full mt-5">
          <p className="py-2 whitespace-nowrap text-lime-500 font-bold">TOTAL EXPENSES</p>
          <p className="py-4 whitespace-nowrap text-green-light text-xl font-bold">{total.toFixed(2)}</p>
        </div>
      )}
      {allCars && cars.map((car) => <AllMonthsTable key={car} data={data[car]} car={car} />)}

      {showMonths && <AllMonthsTable data={data[car]} car={car} />}
      {!showMonths && !allCars && <MonthlyTransactionsTable data={data} car={car} month={month} />}
    </div>
  );
};

export default Table;
