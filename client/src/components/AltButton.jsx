import React from 'react';

const AltButton = ({ disabled = false, onClick, type, children, id }) => {
  return (
    <button
      type={type ? type : 'button'}
      onClick={onClick ? onClick : null}
      disabled={disabled}
      data-id={id}
      className="bg-blue-500 hover:bg-yellow-400 hover:text-black text-white  border font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
};

export default AltButton;
