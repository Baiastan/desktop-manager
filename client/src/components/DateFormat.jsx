import React from 'react';
import DateDisplay from './DateDisplay';

const DateFormat = ({ date }) => {
  const options = {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).formatToParts(
    new Date(date)
  );

  const dateParts = formattedDate.reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});

  const {
    month,
    day,
    weekday: dayWeek,
    year,
    hour,
    minute,
    dayPeriod,
    timeZoneName: timeZone,
  } = dateParts;
  const time = `${hour}:${minute} ${dayPeriod.toLowerCase()}`;

  return (
    <DateDisplay
      month={month}
      day={day}
      dayWeek={dayWeek}
      year={year}
      time={time}
      timeZone={timeZone}
    />
  );
};

export default DateFormat;
