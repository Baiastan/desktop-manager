import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useAddLinksMutation } from "../store/api";
import { useDispatch } from "react-redux";
import { addNewLink } from "../store";

const AddForm = ({ onCloseRequest, category }) => {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [disabled, setIsDisabled] = useState(true);

  const [addLink, { isLoading, isError }] = useAddLinksMutation();

  useEffect(() => {
    if (title.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { id: uuid(), link, title, text, category };

    dispatch(addNewLink(data));

    //connect with database;
    await addLink(data);

    onCloseRequest();

    setLink("");
    setTitle("");
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center"
    >
      <h1 className="font-playfair mb-5 text-lg capitalize">{category}</h1>
      <input
        className="w-full bg-dark font-semibold placeholder-white p-3"
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Insert link here"
      />
      <input
        className="w-full bg-dark font-semibold placeholder-white p-3 mt-2"
        type="text"
        value={title}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full bg-dark  placeholder-white p-3 mt-5"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Note"
      />

      <button
        disabled={disabled}
        className={`p-2 w-2/6 ${
          disabled ? "bg-gray-400" : "bg-yell"
        } font-semibold text-black mt-5 hover:saturate-150 
         hover:cursor-pointer transition duration-500`}
      >
        Submit
      </button>
    </form>
  );
};

export default AddForm;
