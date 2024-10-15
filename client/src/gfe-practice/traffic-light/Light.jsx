import React from 'react';

const Light = ({ backgroundColor }) => {
  return (
    <div className="light" aria-hidden={true} style={{ backgroundColor }} />
  );
};

export default Light;
