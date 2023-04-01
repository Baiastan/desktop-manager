import React, { useEffect, useState } from "react";
import {
  MdExpandLess,
  MdExpandMore,
  MdDoneOutline,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";

import DeleteForm from "../../components/DeleteForm";
import { useUpdateTodoMutation } from "../../store/api";
import Deadline from "./Deadline";
const TodoItem = ({ id, title, details, completed, deadline, dateCreated }) => {
  const [open, setOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [updateTodo, {}] = useUpdateTodoMutation();

  const handleChangeStatus = async () => {
    setIsCompleted(!isCompleted);

    const res = await updateTodo({ id, completed: !isCompleted });
  };

  return (
    <li className={`flex flex-col hover:cursor-pointer mb-4`}>
      <div className="flex justify-between items-center text-md">
        <div className="flex items-center">
          <button onClick={handleChangeStatus} className="mt-1">
            {isCompleted ? (
              <MdDoneOutline className="text-green-light" />
            ) : (
              <MdCheckBoxOutlineBlank className="text-lg" />
            )}
          </button>
          <h3
            className={`text-2xl pl-3 hover:text-blue-hover ${
              isCompleted ? "line-through text-red-500" : ""
            }
      `}
            onClick={() => setOpen(!open)}
          >
            {title}
          </h3>
        </div>

        <div className="flex w-2/6 justify-between">
          <Deadline deadline={deadline} dateCreated={dateCreated} />
          <div>
            <button
              onClick={() => setOpen(!open)}
              className="hover:opacity-50 mr-1"
            >
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
      {open && details !== "" && (
        <p className="mt-2 text-sm w-2/4 font-opensans">{details}</p>
      )}
    </li>
  );
};

export default TodoItem;
