import React, { useState, useEffect } from "react";

const Deadline = ({ deadline, dateCreated }) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [updateFrequency, setUpdateFrequency] = useState(86400000);
  const [isOverdue, setIsOverdue] = useState(false);

  const handleDeadline = (end) => {
    const now = new Date();
    const endDate = new Date(end);
    const diff = endDate - now;

    if (diff < 0) {
      setIsOverdue(true);
      return "Overdue";
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (days >= 2) {
      setUpdateFrequency(86400000);
      return `${days} days`;
    } else if (days === 1) {
      setUpdateFrequency(3600000);
      return `${days} day ${hours} hours`;
    } else if (hours >= 2) {
      setUpdateFrequency(60000);
      return `${hours} hours ${minutes} minutes`;
    } else if (hours === 1) {
      setUpdateFrequency(60000);
      return `${hours} hour ${minutes} minutes`;
    } else if (minutes > 5) {
      setUpdateFrequency(60000);
      return `${minutes} minutes`;
    } else if (minutes <= 5) {
      setUpdateFrequency(1000);
      return `${minutes} minutes ${seconds} seconds`;
    } else {
      setUpdateFrequency(1000);
      return `${seconds} seconds`;
    }
  };

  useEffect(() => {
    const updateTimer = () => {
      const timeLeftString = handleDeadline(deadline);
      setTimeLeft(timeLeftString);
    };

    updateTimer();
    const interval = setInterval(updateTimer, updateFrequency);

    return () => clearInterval(interval);
  }, [dateCreated, deadline, updateFrequency]);

  const textColor =
    timeLeft.includes("minute") && !timeLeft.includes("hour")
      ? "text-red-500"
      : "text-white";

  return (
    <>
      <div className={textColor}>{timeLeft}</div>
    </>
  );
};

export default Deadline;
