import React, { useState } from 'react';

import './AuthCodeForm.css';
import InputDigit from './InputDigit';

const singleNumRegex = /^\d$/;
const numRegex = /^\d+$/;

const AuthCodeInput = ({ length, isDisabled, onSubmit }) => {
  const [code, setCode] = useState(Array(length).fill(''));
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(code.join(''));
  };

  const clampIndex = (index) => {
    if (index <= 0) {
      return 0;
    }

    if (index >= length) {
      return length - 1;
    }

    return index;
  };

  const onFocus = (index) => {
    setFocusedIndex(index);
  };

  const onKeyDown = (event, index) => {
    switch (event.key) {
      case 'ArrowLeft':
        setFocusedIndex(clampIndex(focusedIndex - 1));
        break;
      case 'ArrowRight':
        setFocusedIndex(clampIndex(focusedIndex + 1));
        break;
      case 'Backspace':
        if (code[index]) {
          setCode(
            code.map((codeDigit, idx) => (index === idx ? '' : codeDigit))
          );
        } else if (index - 1 >= 0) {
          setCode(
            code.map((codeDigit, idx) => (index - 1 === idx ? '' : codeDigit))
          );
          setFocusedIndex(clampIndex(index - 1));
        }
        break;
      default: {
        const value = event.key;
        if (!singleNumRegex.test(value)) {
          return;
        }

        setCode(
          code.map((codeDigit, idx) =>
            index === idx ? String(value) : codeDigit
          )
        );
        setFocusedIndex(clampIndex(focusedIndex + 1));
        break;
      }
    }
  };
  //123456
  const onPaste = (event) => {
    event.preventDefault();

    const pastedCode = event.clipboardData.getData('text');

    if (!numRegex.test(pastedCode)) {
      return;
    }

    setCode(code.map((codeDigit, idx) => pastedCode[idx] ?? codeDigit));
    setFocusedIndex(clampIndex(pastedCode.length));
  };

  const handleReset = () => {
    setCode(Array(length).fill(''));
    setFocusedIndex(0);
  };

  const isSubmitEnabled = code.every((codeDigit) => Boolean(codeDigit));

  const isResetEnabled = code.some((codeDigit) => Boolean(codeDigit));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          {code.map((codeDigit, index) => (
            <InputDigit
              key={index}
              value={codeDigit}
              isFocused={focusedIndex === index}
              disabled={isDisabled}
              onFocus={() => onFocus(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              onPaste={onPaste}
            />
          ))}
        </div>

        <div className="button-container">
          <button
            onClick={handleReset}
            disabled={!isResetEnabled || isDisabled}
            type="reset"
            className="button button--secondary"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={!isSubmitEnabled || isDisabled}
            className="button button--primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthCodeInput;
