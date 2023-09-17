import React, { useEffect } from "react";

const CarDropdown = ({ car, setCar, data, cars, setCars }) => {
  useEffect(() => {
    const cars = getCars(data);
    setCars(cars);
  }, [data]);

  const getCars = (data) => {
    const cars = [];

    for (const key in data) {
      cars.push(key);
    }

    return cars;
  };
  const handleCarChange = (event) => {
    setCar(event.target.value);
  };

  return (
    <div className="w-full">
      <select
        value={car}
        onChange={handleCarChange}
        className=" mt-3 bg-gray-800 text-gray-200 border py-2 px-3 focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-700 focus:ring-opacity-50"
      >
        <option value="" disabled>
          Select a car
        </option>
        {cars.map((carName) => (
          <option key={carName} value={carName}>
            {carName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CarDropdown;
