import React, { useEffect, useState } from 'react';

import './Traffic.css';
import Light from './Light';

const TrafficLight = ({
  initialColor = 'green',
  config,
  layout = 'vertical',
}) => {
  const [currentColor, setCurrentColor] = useState(initialColor);

  useEffect(() => {
    // const { duration, next } = config[currentColor];
    // const timerId = setTimeout(() => {
    //   setCurrentColor(next);
    // }, duration);
    // return () => clearTimeout(timerId);
  }, [currentColor]);

  return (
    <div
      aria-live="polite"
      aria-label={`Current light: ${currentColor}`}
      className={[
        'traffic-light',
        layout === 'vertical' && 'traffic-light__vertical',
      ]
        .filter((cls) => !!cls)
        .join(' ')}
    >
      {Object.keys(config).map((color) => {
        return (
          <Light
            key={color}
            backgroundColor={
              color === currentColor ? config[color].backgroundColor : undefined
            }
          />
        );
      })}
    </div>
  );
};

export default TrafficLight;
