import React from 'react';
import Header from './Header';

const HeaderWithButton = ({ title, show, addForm }) => {
  return (
    <Header>
      {title}
      <button
        onClick={() => {
          addForm(!show);
        }}
        className="hover:text-blue-hover"
      >
        +
      </button>
    </Header>
  );
};

export default HeaderWithButton;
