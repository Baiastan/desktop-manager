import React, { useState } from 'react';
import AddTitle from './AddTitle';
import AddText from './AddText';

const ComposeNote = ({ parentRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="absolute bottom-2 right-1 flex flex-col space-y-2  p-2 ">
      <button
        onClick={toggleVisibility}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 text-xs rounded focus:outline-none focus:shadow-outline"
        data-id="toggle"
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && (
        <>
          <AddTitle parentRef={parentRef} />
          <AddText parentRef={parentRef} />
        </>
      )}
    </div>
  );
};

export default ComposeNote;
