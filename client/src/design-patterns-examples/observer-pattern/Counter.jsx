import React from 'react';
import { useGlobalState } from './Store';

const Counter = () => {
  const { state, increment } = useGlobalState();
  return (
    <div>
      <h1 className="text-white text-2xl">Observer Pattern</h1>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
