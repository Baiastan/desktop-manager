import React from 'react';

const Modal = ({ children, onRequestClose, show }) => {
  return show ? (
    <div
      className="fixed z-[1] left-0 top-0 w-full h-full overflow-auto bg-black-0.5"
      onClick={onRequestClose}
      aria-label="dialog"
      aria-modal="true"
    >
      <div
        className="bg-blue w-[50%] max-w-[600px] mx-auto my-[10%] relative p-5 flex justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 bottom-2 text-2xl"
          onClick={onRequestClose}
        >
          x
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
