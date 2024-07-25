import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderWithButton from '../../components/HeaderWithButton';
import Modal from '../../components/Modal';

import AddToDoItem from '../to-do-list/AddToDoItem';
import TodoItem from '../to-do-list/TodoItem';
import { useGetTodoQuery } from '../../store/api';
import { updateTodos } from '../../store';

const JobList = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const dataTodos = useSelector((state) => state.global.todos);
  const { data: todos } = useGetTodoQuery();

  const jobTodos = dataTodos.filter((todo) => todo?.category === 'jobTodo');

  const handleModal = () => {
    setShow(false);
  };

  useEffect(() => {
    dispatch(updateTodos(todos || []));
  }, [todos]);

  return (
    <div className="w-full p-2">
      <div className="flex mx-auto md:w-2/6 w-full justify-center px-5 mb-4">
        <HeaderWithButton
          title="Job Interviews"
          addForm={setShow}
          show={show}
        />

        <Modal show={show} onRequestClose={handleModal}>
          <AddToDoItem onCloseRequest={handleModal} category="jobTodo" />
        </Modal>
      </div>
      <ul>
        {(jobTodos || []).map(
          ({ id, title, details, completed, deadline, dateCreated }) => (
            <TodoItem
              key={id}
              title={title}
              deadline={deadline}
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

export default JobList;
