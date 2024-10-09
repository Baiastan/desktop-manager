import React, { useState } from 'react';

import './DataTable.css';

import Table from './Table';
import Button from '../../components/Button';
import usePaginateUsers from './usePaginateUsers';

const formatLabel = (label) => {
  console.log(label);
  const snakeToWords = label.split('_');

  const camelToWords = snakeToWords.map((word) =>
    word.replace(/([a-z])([A-Z])/g, '$1 $2')
  );

  const formattedLabel = camelToWords
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return formattedLabel;
};

const formatHeaders = (users) => {
  const keys = Object.keys(users[0]);

  const headers = keys.map((el) => {
    let type;
    let val = users[0][el];

    if (isNaN(Number(val))) {
      type = 'string';
    } else {
      type = 'number';
    }

    return { label: formatLabel(el), key: el.toLowerCase(), type };
  });

  return headers;
};

const DataTable = ({ usersData }) => {
  const [showNum, setShowNum] = useState(5);
  const [sortedData, setSortedUsers] = useState(usersData);
  const [asc, setAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const headers = formatHeaders(usersData);

  const { pageUsers, totalPages } = usePaginateUsers(
    sortedData,
    currentPage,
    showNum
  );

  const onShowNumChange = (event) => {
    setShowNum(Number(event.target.value));
    setCurrentPage(1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleSort = (event) => {
    const id = event.target.id;
    const tagName = event.target.tagName;

    if (tagName === 'TH') {
      const type = event.target.dataset.type;

      if (type === 'number') {
        setSortedUsers((prev) => {
          const arr = [...prev];
          if (asc) {
            arr.sort((a, b) => Number(a[id]) - Number(b[id]));
          } else {
            arr.sort((a, b) => Number(b[id]) - Number(a[id]));
          }
          setAsc(!asc);
          return arr;
        });
      } else {
        setSortedUsers((prev) => {
          const arr = [...prev];
          if (asc) {
            arr.sort((a, b) => a[id]?.localeCompare(b[id]));
          } else {
            arr.sort((a, b) => b[id]?.localeCompare(a[id]));
          }

          setAsc(!asc);
          return arr;
        });
      }
    }
  };

  return (
    <div>
      <Table header={headers} data={pageUsers} onSort={handleSort} />
      <div className="button-container">
        <select value={showNum} onChange={onShowNumChange} className="option">
          <option value={5}>Show 5</option>
          <option value={10}>Show 10</option>
          <option value={20}>Show 20</option>
        </select>
        <div className="page-buttons">
          <Button onClick={handlePrev} disabled={currentPage === 1}>
            Prev
          </Button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <Button onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
