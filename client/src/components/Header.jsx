import React from 'react';

const Header = ({ children, color = 'white' }) => {
  const colors = {
    red: 'text-red-500',
    white: 'text-white',
    green: 'text-green-light',
  };

  return (
    <h1
      className={`text-3xl text-center ${colors[color]}  w-full flex justify-between `}
    >
      {children}
    </h1>
  );
};

export default Header;
