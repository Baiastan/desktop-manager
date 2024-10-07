import ClockImpl from './ClockImpl';
import useCurrentDate from './useCurrentDate';

import './AnalogClock.css';
import { useState } from 'react';

const AnalogClock = () => {
  const [show, setShow] = useState(false);
  const date = useCurrentDate(show);

  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <>
      <button onClick={() => setShow(!show)}>Show clock</button>
      {show && (
        <div className="clock-wrapper">
          <ClockImpl
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            size={400}
          />
        </div>
      )}
    </>
  );
};

export default AnalogClock;
