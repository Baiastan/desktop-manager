import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import DeleteForm from "./DeleteForm";

const List = ({ title, link, text, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="flex flex-col text-white">
      <div className="flex justify-between items-center text-md">
        <a href={link} target="_blank" rel="noreferrer" className="text-blue text-lg hover:text-blue-hover">
          {title}
        </a>

        <div>
          <button onClick={() => setOpen(!open)} className="hover:opacity-50">
            {!open ? <MdExpandMore className="text-lg" /> : <MdExpandLess className="text-lg" />}
          </button>
          {"     "}
          <DeleteForm id={id} type="links" />
        </div>
      </div>
      {open && <p className="mt-2 text-sm">{text}</p>}
    </li>
  );
};

export default List;
