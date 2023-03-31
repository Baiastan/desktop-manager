import React from "react";

const Header = ({ title, show, addForm }) => {
  return (
    <h1 className="text-3xl text-center w-full flex justify-between">
      {title}{" "}
      <button
        onClick={() => {
          addForm(!show);
        }}
        className="hover:text-blue-hover"
      >
        +
      </button>
    </h1>
  );
};

export default Header;
