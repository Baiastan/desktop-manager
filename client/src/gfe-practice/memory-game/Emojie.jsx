import React from 'react';

import './Emojie.css';

const Emojie = ({ emojie, active = false, match = false, onClick, index }) => {
  return (
    <button
      onClick={() => onClick(index, emojie)}
      className={[
        'emojie-item',
        active && !match ? 'emojie__active' : 'emojie__hidden',
        match && 'emojie__match',
      ]
        .filter((el) => Boolean(el))
        .join(' ')}
      data-value={emojie}
    >
      <p>{emojie}</p>
    </button>
  );
};

export default Emojie;
