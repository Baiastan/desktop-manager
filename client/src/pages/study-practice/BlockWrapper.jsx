import React from 'react';
import ComposeNoteButton from './add-text';
import Header from '../../components/Header';

const BlockWrapper = ({ children, className, showAddText = true }) => {
  return (
    <section
      className={`${className} font-playfair flex flex-col md:flex-row text-white w-full ss:w-4/5 mx-auto mt-10 bg-blue-400 border-4 border-blue-700 p-5 rounded-lg relative`}
    >
      {showAddText && <ComposeNoteButton />}
      {children}
    </section>
  );
};

export default BlockWrapper;
