import React from 'react';
import TrafficLight from './TrafficLight';

import './Traffic.css';

const config = {
  red: {
    backgroundColor: 'red',
    duration: 4000,
    next: 'green', // green
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 500,
    next: 'red',
  },
  green: {
    backgroundColor: 'green',
    duration: 3000,
    next: 'yellow',
  },
};

const AppTrafficLight = () => {
  return (
    <div className="wrapper">
      <TrafficLight config={config} />
      <TrafficLight config={config} layout="horizontal" />
    </div>
  );
};

export default AppTrafficLight;
