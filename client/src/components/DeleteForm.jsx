import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateLinks, updateTodos } from "../store";
import { useDeleteLinkMutation, useDeleteTodoMutation } from "../store/api";

const DeleteTodo = ({ id, dispatch }) => {
  const [deleteTodo, {}] = useDeleteTodoMutation();
  const todos = useSelector((state) => state.global.todos);

  const stateUpdate = (id) => {
    const updatedData = todos.filter((todo) => todo.id !== id);

    dispatch(updateTodos(updatedData));
  };

  return <Button stateUpdate={stateUpdate} deleteItem={deleteTodo} id={id} />;
};

const DeleteLink = ({ id, dispatch }) => {
  const [deleteLink, {}] = useDeleteLinkMutation();

  const links = useSelector((state) => state.global.links);

  const stateUpdate = (id) => {
    const updatedData = links.filter((link) => link.id !== id);

    dispatch(updateLinks(updatedData));
  };

  return <Button stateUpdate={stateUpdate} deleteItem={deleteLink} id={id} />;
};

const Button = ({ stateUpdate, deleteItem, id }) => {
  return (
    <button
      onClick={() => {
        stateUpdate(id);
        deleteItem(id);
      }}
      className={`hover:opacity-50`}
    >
      {" "}
      <MdDelete />
    </button>
  );
};

const DeleteForm = ({ id, type }) => {
  const dispatch = useDispatch();

  let output;

  if (type === "links") {
    output = <DeleteLink id={id} dispatch={dispatch} />;
  } else if (type === "todos") {
    output = <DeleteTodo id={id} dispatch={dispatch} />;
  }

  return output;
};
export default DeleteForm;
