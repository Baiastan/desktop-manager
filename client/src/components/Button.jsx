import React from 'react';

const Button = ({
  disabled = false,
  onClick,
  type,
  className,
  children,
  id,
}) => {
  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick ? onClick : null}
      disabled={disabled}
      data-id={id}
      className={`p-2 w-2/6 ${disabled ? 'bg-gray-400' : 'bg-yell'} font-semibold text-black mt-5 hover:saturate-150 
   hover:cursor-pointer transition duration-500 m-1 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
