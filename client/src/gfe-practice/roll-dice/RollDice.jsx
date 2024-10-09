import React, { useState } from 'react';

import './RollDice.css';
import Button from '../../components/Button';

const DICE_FACE_DOT_POSITIONS = {
  1: ['dot--center'],
  2: ['dot--top-right', 'dot--bottom-left'],
  3: ['dot--top-right', 'dot--center', 'dot--bottom-left'],
  4: [
    'dot--top-left',
    'dot--top-right',
    'dot--bottom-left',
    'dot--bottom-right',
  ],
  5: [
    'dot--top-left',
    'dot--top-right',
    'dot--center',
    'dot--bottom-left',
    'dot--bottom-right',
  ],
  6: [
    'dot--top-left',
    'dot--top-right',
    'dot--center-left',
    'dot--center-right',
    'dot--bottom-left',
    'dot--bottom-right',
  ],
};

const Dice = ({ num }) => {
  return (
    <div className="dots-wrapper">
      <div className="dice">
        {num >= 1 &&
          num <= 6 &&
          DICE_FACE_DOT_POSITIONS[num]?.map((el, index) => {
            return <span key={index} className={`${el} dot`}></span>;
          })}
      </div>
    </div>
  );
};

const RollDice = () => {
  const [value, setValue] = useState(null);
  const [rerender, setRerender] = useState(false);

  const handleRoll = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const num = formData.get('roll-number');

    setValue(Number(num));
    setRerender(!rerender);
  };

  return (
    <div className="roll-dice-wrapper">
      <form onSubmit={handleRoll}>
        <h1>Number of dice</h1>
        <input
          type="number"
          min="1"
          required={true}
          max="12"
          id="roll-number"
          name="roll-number"
        />

        <Button type="submit">Roll</Button>
      </form>
      {value && (
        <div className="dice-container">
          {Array.from({ length: value }, () => 0).map((_, index) => {
            const randomNum = Math.trunc(Math.random() * 6) + 1;

            return <Dice num={randomNum} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default RollDice;
