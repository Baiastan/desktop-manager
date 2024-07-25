import React from 'react';

const Button = ({ disabled = false, onClick, type, className, children }) => {
  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick ? onClick : null}
      disabled={disabled}
      className={`p-2 w-2/6 ${disabled ? 'bg-gray-400' : 'bg-yell'} font-semibold text-black mt-5 hover:saturate-150 
   hover:cursor-pointer transition duration-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
