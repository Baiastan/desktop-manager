import React, { useEffect, useRef } from 'react';

const InputDigit = ({ value, isFocused, ...props }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <input
      ref={inputRef}
      type="text"
      className="input-field"
      maxLength={1}
      inputMode="numeric"
      autoComplete="one-time-code"
      value={value}
      {...props}
    />
  );
};

export default InputDigit;
