import React from 'react';

import './Emojie.css';

import MemoryGame from './MemoryGame';

const AppMemory = () => {
  return <MemoryGame size={3} cols={3} rows={2} matchCount={3} />;
};

export default AppMemory;
