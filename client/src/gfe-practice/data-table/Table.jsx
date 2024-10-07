import React, { useState } from 'react';

import './DataTable.css';

const Table = ({ header, data, onSort }) => {
  return (
    <table>
      <thead onClick={onSort}>
        {header.map(({ label, key, type }) => (
          <th key={key} id={key} data-type={type}>
            {label}
          </th>
        ))}
      </thead>
      <tbody>
        {data.map((el, i) => (
          <tr key={i}>
            {Object.values(el).map((item, i) => {
              return <td key={i}>{item}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
