import React from 'react';

const Input = ({
  className,
  type,
  value,
  onChange,
  placeholder,
  props = {},
}) => {
  return (
    <input
      className={`w-full bg-dark text-white font-semibold placeholder-white-0.5 p-3 ${className}`}
      type={type}
      {...props}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
