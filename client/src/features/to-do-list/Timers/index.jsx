import React, { useEffect } from "react";
import { useCalculateDeadline } from "../../../custom-hooks/useCalculateDeadline";

const Timer = ({ deadline, title, dateCreated }) => {
  const [hoursLeft, setHoursLeft, calculateHours] = useCalculateDeadline("hours", deadline);
  const [minutes, setMinutes, calculateMin] = useCalculateDeadline("minutes", deadline);
  const [totalHours] = useCalculateDeadline("totalHours", deadline, dateCreated); //need to fix it //need to save in server database

  useEffect(() => {
    const interval = setInterval(() => {
      setHoursLeft(calculateHours());
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [deadline]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(calculateMin());
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, [deadline]);

  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < totalHours; i++) {
      cells.push(
        <div
          key={i}
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: i < totalHours - hoursLeft ? "red" : "green",
            margin: "5px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {i < totalHours - hoursLeft ? "X" : ""}
        </div>
      );
    }
    if (minutes > 0) {
      cells.push(
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "green",
            margin: "5px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {minutes}
        </div>
      );
    }

    return cells;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "black", fontSize: "1.5rem" }}>{title}</h1>
        <h3>
          <div>
            Hours Left till Deadline:{" "}
            <span style={{ color: "#A6FF96", fontSize: "1.5rem" }}>
              {hoursLeft}:{minutes}
            </span>
          </div>
          <div>
            Total Hours Given: <span style={{ fontSize: "1.5rem", color: "black" }}>{totalHours}</span>
          </div>

          <div>
            Hours Have Passed since Goal is Set:
            <span style={{ color: "red", fontSize: "1.5rem" }}> {totalHours - hoursLeft}</span>
          </div>
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>{renderCells()}</div>
    </div>
  );
};

export default Timer;
