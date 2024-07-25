import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({ text, to, className }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        color: isActive ? 'yellow' : 'white',
        textDecoration: isActive ? 'underline' : 'none',
      })}
    >
      <li
        className={`hover:text-yellow-300 text-red-hover flex transition pt-3 px-5 md:p-0 duration-500 ${className}`}
      >
        {text}
      </li>
    </NavLink>
  );
};

export default NavigationItem;
