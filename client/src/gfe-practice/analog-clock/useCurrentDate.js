import { useEffect, useState } from 'react';

export default function useCurrentDate(isActive) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (!isActive) return;

    const timer = window.setInterval(() => {
      setDate(new Date());
    }, 100);

    return () => {
      window.clearInterval(timer);
    };
  }, [isActive]);

  return date;
}
