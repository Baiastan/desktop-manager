import React, { useEffect, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import DeleteForm from "../../components/DeleteForm";
import { useUpdateTodoMutation } from "../../store/api";
const TodoItem = ({ id, title, details, completed, deadline, dateCreated }) => {
  const [open, setOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [updateTodo, {}] = useUpdateTodoMutation();

  const handleChangeStatus = async () => {
    await updateTodo(id, { completed: !completed });
    setIsCompleted(!completed);
  };

  return (
    <li className={`flex flex-col hover:cursor-pointer mb-4`}>
      <div className="flex justify-between items-center text-md">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isCompleted}
            value={isCompleted}
            onClick={handleChangeStatus}
            onChange={() => setIsCompleted(!isCompleted)}
          />
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

        <div>
          <button onClick={() => setOpen(!open)} className="hover:opacity-50">
            {!open ? (
              <MdExpandMore className="text-lg" />
            ) : (
              <MdExpandLess className="text-lg" />
            )}
          </button>
          {"     "}
          <DeleteForm id={id} type="todos" />
        </div>
      </div>
      {open && <p className="mt-2 text-sm w-2/4 font-opensans">{details}</p>}
    </li>
  );
};

export default TodoItem;
