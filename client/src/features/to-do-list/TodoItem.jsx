import React, { useState } from "react";
import { MdExpandLess, MdExpandMore, MdDoneOutline, MdCheckBoxOutlineBlank } from "react-icons/md";

import DeleteForm from "../../components/DeleteForm";
import { useUpdateTodoMutation } from "../../store/api";
import Deadline from "./Deadline";
import Modal from "../../components/Modal";
import Timer from "./Timers";
const TodoItem = ({ id, title, details, completed, deadline, dateCreated }) => {
  const [open, setOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [updateTodo, {}] = useUpdateTodoMutation();

  const handleChangeStatus = async (event) => {
    event.stopPropagation();
    setIsCompleted(!isCompleted);

    const res = await updateTodo({ id, completed: !isCompleted });
  };

  const handleClickOnItem = () => {
    setOpen(!open);
  };

  return (
    <>
      <li
        className={`flex flex-col hover:cursor-pointer mb-2 hover:bg-dark p-1 hover:text-blue-hover`}
        onClick={handleClickOnItem}
      >
        <div className="flex justify-between items-center text-md">
          <div className="flex items-center">
            <button onClick={(event) => handleChangeStatus(event)} className="mt-1">
              {isCompleted ? (
                <MdDoneOutline className="text-green-light" />
              ) : (
                <MdCheckBoxOutlineBlank className="text-lg" />
              )}
            </button>
            <h3
              className={`text-2xl pl-3  ${isCompleted ? "line-through text-red-500" : ""}
      `}
            >
              {title}
            </h3>
          </div>

          <div className="flex w-2/6 justify-between items-center">
            <Deadline deadline={deadline} dateCreated={dateCreated} completed={isCompleted} />
            <div className="flex items-center">
              <button onClick={() => setOpen(!open)} className="hover:opacity-50 mr-1">
                {!open && details.length > 0 ? (
                  <MdExpandMore className="text-lg" />
                ) : details.length > 0 ? (
                  <MdExpandLess className="text-lg" />
                ) : null}
              </button>

              <DeleteForm id={id} type="todos" />
            </div>
          </div>
        </div>
      </li>
      <Modal show={open} onRequestClose={handleClickOnItem}>
        <Timer deadline={deadline} title={title} dateCreated={dateCreated} />
        {details && <div className="mt-2 text-sm w-2/4 font-opensans">{details}</div>}
      </Modal>
    </>
  );
};

export default TodoItem;
