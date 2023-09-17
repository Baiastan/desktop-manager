import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { useAddTodoMutation } from "../../store/api";
import AddToDoItem from "./AddToDoItem";
import TodoItem from "./TodoItem";
import { addNewTodo } from "../../store";
import uuid from "react-uuid";
const ToDoList = ({ data }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const [addTodo, {}] = useAddTodoMutation();

  const handleModal = () => {
    setShow(false);
  };

  //creates new todo item everyday at 5 pm
  useEffect(() => {
    const getRemainingTime = (hours, minutes) => {
      const now = new Date();
      const targetTime = new Date(now);
      targetTime.setHours(hours, minutes, 0, 0);

      if (now > targetTime) {
        return null;
      }

      const timeRemaining = targetTime.getTime() - now.getTime();
      return timeRemaining;
    };

    const createAndScheduleAutoTodo = () => {
      createAutoTodo();
    };

    const targetHours = 17; // Set your desired hours here (6 PM)
    const targetMinutes = 5; // Set your desired minutes here
    const timeRemaining = getRemainingTime(targetHours, targetMinutes);

    if (timeRemaining !== null) {
      const initialTimeout = setTimeout(() => {
        createAndScheduleAutoTodo();
        const repeatingInterval = setInterval(
          createAndScheduleAutoTodo,
          24 * 60 * 60 * 1000
        ); // Run every 24 hours

        // Clear the repeating interval when the component is unmounted
        return () => {
          clearInterval(repeatingInterval);
        };
      }, timeRemaining);

      // Clear the initial timeout when the component is unmounted
      return () => {
        clearTimeout(initialTimeout);
      };
    }
  }, []);

  console.log("Running todo");

  const createAutoTodo = () => {
    console.log("Creating auto todo item");

    const dateCreated = new Date().toISOString();
    const deadlineDate = new Date(); // Get the current date and time
    deadlineDate.setHours(deadlineDate.getHours() + 24); // Add 24 hours to the current date and time
    const deadline = deadlineDate.toISOString(); // Convert the deadline date to an ISO string

    const data = {
      id: uuid(),
      title: "Solve One Leetcode Problem a day",
      details: "",
      dateCreated,
      deadline,
      completed: false,
    };

    dispatch(addNewTodo(data));

    addTodo(data);
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
        {data.map(
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

export default ToDoList;
