import React, { useState } from 'react';
import {
  MdExpandLess,
  MdExpandMore,
  MdDoneOutline,
  MdCheckBoxOutlineBlank,
} from 'react-icons/md';

import DeleteForm from '../../components/DeleteForm';
import { useUpdateTodoMutation } from '../../store/api';
import Deadline from './Deadline';
import Modal from '../../components/Modal';
import AddToDoItem from './AddToDoItem';
import DateFormat from '../../components/DateFormat';
import BlockWrapper from '../../pages/study-practice/BlockWrapper';
const TodoItem = ({
  id,
  title,
  details,
  completed,
  deadline,
  dateCreated,
  jobDescLink,
  meetingLink,
}) => {
  const [open, setOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [updateTodo, {}] = useUpdateTodoMutation();
  //optimize it! handle clicks in a parent component. implement even delegation
  const handleChangeStatus = async (event) => {
    event.stopPropagation();
    setIsCompleted(!isCompleted);

    await updateTodo({ id, completed: !isCompleted });
  };

  const handleClickOnItem = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };

  return (
    <>
      <li
        className={`flex flex-col hover:cursor-pointer mb-2 hover:bg-dark p-1 text-white hover:text-blue-hover`}
        onClick={handleClickOnItem}
      >
        <div className="flex justify-between items-center text-md">
          <div className="flex items-center">
            <button
              onClick={(event) => handleChangeStatus(event)}
              className="mt-1"
            >
              {isCompleted ? (
                <MdDoneOutline className="text-green-light" />
              ) : (
                <MdCheckBoxOutlineBlank className="text-lg" />
              )}
            </button>
            <h3
              className={`text-2xl pl-3  ${isCompleted ? 'line-through text-red-500' : ''}
      `}
            >
              {title}
            </h3>
          </div>

          <div className="flex w-2/6 justify-between items-center">
            <Deadline
              deadline={deadline}
              dateCreated={dateCreated}
              completed={isCompleted}
            />
            <DateFormat date={deadline} />
            <div className="flex items-center">
              <DeleteForm id={id} type="todos" />
            </div>
          </div>
        </div>
      </li>

      <Modal show={open} onRequestClose={handleClickOnItem}>
        <BlockWrapper showAddText={false}>
          <div>
            <h2>Details</h2>
            <p>{details}</p>
          </div>
          <div className="flex flex-col">
            <a className="underline" href={jobDescLink} target="_blank">
              Take me to Job Description
            </a>
            <a href={meetingLink} className="underline" target="_blank">
              Take me to Interview Link
            </a>
          </div>
        </BlockWrapper>
      </Modal>
    </>
  );
};

export default TodoItem;
