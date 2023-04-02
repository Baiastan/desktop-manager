import React, { useState } from "react";
import AddForm from "../../components/AddFormLinks";
import DeleteForm from "../../components/DeleteForm";
import Modal from "../../components/Modal";

const Navbar = ({ data }) => {
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const handleModal = () => {
    setShow(false);
  };
  return (
    <div className="w-full mx-auto h-full flex justify-start px-5 mt-5">
      <ul className="font-playfair ss:w-4/5 mx-auto w-full flex flex-wrap items-center md:justify-between">
        {data.map((el) => {
          return (
            <li
              key={el.id}
              onMouseEnter={() => setDeleteId(el.id)}
              onMouseLeave={() => setDeleteId(null)}
              className="hover:text-yellow-300 text-blue-hover flex transition pt-3 px-5 md:p-0 duration-500"
            >
              <a href={el.link} target="_blank" rel="noreferrer">
                {el.title}
              </a>
              {deleteId === el.id && <DeleteForm id={el.id} type="links" />}
            </li>
          );
        })}
        <li className="hover:text-blue-hover text-yellow-300  transition duration-500 py-5">
          <button onClick={() => setShow(!show)} className="text-2xl">
            +
          </button>
        </li>
      </ul>

      <Modal show={show} onRequestClose={handleModal}>
        <AddForm onCloseRequest={handleModal} category="navbar" />
      </Modal>
    </div>
  );
};

export default Navbar;
