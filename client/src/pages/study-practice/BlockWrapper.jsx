import React, { useRef } from 'react';
import ComposeNoteButton from './add-text';

const BlockWrapper = ({ children, className, showAddText = false }) => {
  const parentComponent = useRef(null);
  return (
    <section
      className={`${className} font-playfair flex flex-col pr-36 text-white w-full ss:w-4/5 mx-auto mt-10 bg-blue-400 border-4 border-blue-700 p-5 rounded-lg relative`}
      ref={parentComponent}
    >
      {showAddText && <ComposeNoteButton parentRef={parentComponent} />}
      {children}
    </section>
  );
};

export default BlockWrapper;
