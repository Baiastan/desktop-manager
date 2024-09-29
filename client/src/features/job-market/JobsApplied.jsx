import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderWithButton from '../../components/HeaderWithButton';
import Modal from '../../components/Modal';

import AddToDoItem from '../to-do-list/AddToDoItem';
import TodoItem from '../to-do-list/TodoItem';
import { useGetTodoQuery } from '../../store/api';
import { updateTodos } from '../../store';

const JobsApplied = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const dataTodos = useSelector((state) => state.global.todos);
  const { data: todos } = useGetTodoQuery();

  const jobTodos = dataTodos.filter((todo) => todo?.category === 'jobsApplied');

  const handleModal = () => {
    setShow(false);
  };

  useEffect(() => {
    dispatch(updateTodos(todos || []));
  }, [todos]);

  console.log(todos);

  return (
    <div className="w-full p-2">
      <div className="flex mx-auto md:w-2/6 w-full justify-center px-5 mb-4">
        <HeaderWithButton title="Jobs Applied" addForm={setShow} show={show} />

        <Modal show={show} onRequestClose={handleModal}>
          <AddToDoItem onCloseRequest={handleModal} category="jobsApplied" />
        </Modal>
      </div>
      <ul>
        {(jobTodos || []).map(
          ({ id, title, details, completed, dateCreated }) => (
            <TodoItem
              key={id}
              title={title}
              deadline={dateCreated}
              completed={completed || false}
              details={details}
              dateCreated={dateCreated}
              id={id}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default JobsApplied;
