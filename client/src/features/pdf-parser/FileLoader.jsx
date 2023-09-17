import React, { useRef, useState, useMemo } from "react";
import * as Papa from "papaparse";
import Table from "./Table";
import { transformData } from "./utils";

const FileLoader = () => {
  const fileRef = useRef(null);
  const [data, setData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      complete: (result) => {
        const data = transformedData(result.data.slice(1));

        setData(data);
      },
      header: false,
      skipEmptyLines: true,
    });
  };

  const transformedData = useMemo(
    () => (data) => {
      return transformData(data);
    },
    [data]
  );

  return (
    <div className="p-8 h-screen">
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-100">Upload CSV FastStrack Statement here</h1>
      <div className="flex items-center justify-center">
        <label className="flex items-center px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">
          <svg className="w-8 h-8 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 .4a.6.6 0 01.6.6V9h8a.6.6 0 010 1.2h-8v8.4a.6.6 0 01-1.2 0V10.2H1.2a.6.6 0 010-1.2H9V1a.6.6 0 011-.6z"></path>
          </svg>
          Select your CSV File
          <input type="file" className="hidden" ref={fileRef} onChange={handleFileChange} />
        </label>
      </div>
      {data && <Table data={data} />}
    </div>
  );
};

export default React.memo(FileLoader);
