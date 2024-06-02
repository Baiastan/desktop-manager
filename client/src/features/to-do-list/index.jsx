import React, { useState } from "react";

import Header from "../../components/Header";
import Modal from "../../components/Modal";

import AddToDoItem from "./AddToDoItem";
import TodoItem from "./TodoItem";

const ToDoList = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(false);
  };

  return (
    <div className="w-full p-2">
      <div className="flex mx-auto md:w-2/6 w-full justify-center px-5 mb-4">
        <Header title="My To Do List" addForm={setShow} show={show} />

        <Modal show={show} onRequestClose={handleModal}>
          <AddToDoItem onCloseRequest={handleModal} />
        </Modal>
      </div>
      <ul>
        {data.map(({ id, title, details, completed, deadline, dateCreated }) => (
          <TodoItem
            key={id}
            title={title}
            deadline={deadline}
            completed={completed || false}
            details={details}
            dateCreated={dateCreated}
            id={id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
