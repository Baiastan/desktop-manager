import React from 'react';

const DateDisplay = ({ month, day, dayWeek, time, timeZone }) => {
  return (
    <div>
      <span>
        {month} {day} {dayWeek} {time} ({timeZone})
      </span>
    </div>
  );
};

export default DateDisplay;
