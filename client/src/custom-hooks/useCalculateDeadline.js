import { useEffect, useState } from "react";

export const useCalculateDeadline = (type = "hours", deadline, dateCreated) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(calculate());
  }, []);

  const calculate = () => {
    if (type === "totalHours") {
      const pastDate = new Date(dateCreated);
      const endDate = new Date(deadline);

      const diff = endDate - pastDate;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      console.log("totalHours since creation:", hours);
      return hours;
    } else {
      const now = new Date();
      const endDate = new Date(deadline);
      const diff = endDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      if (type === "days") return days;
      if (type === "hours") return Math.abs(hours);
      if (type === "minutes") return Math.abs(minutes);

      return -1;
    }
  };

  return [value, setValue, calculate];
};
