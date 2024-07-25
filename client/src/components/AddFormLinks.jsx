import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAddLinksMutation } from '../store/api';
import { useDispatch } from 'react-redux';
import { addNewLink } from '../store';
import Input from './Input';
import Button from './Button';

const AddForm = ({ onCloseRequest, category }) => {
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
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
    const id = uuidv4();
    const data = { id, link, title, text, category };

    dispatch(addNewLink(data));

    //connect with database;
    await addLink(data);

    onCloseRequest();

    setLink('');
    setTitle('');
    setText('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center"
    >
      <h1 className="font-playfair mb-5 text-lg capitalize">{category}</h1>
      <Input
        type="text"
        value={link}
        onChange={setLink}
        placeholder="Insert link here"
      />

      <Input
        className="mt-2"
        type="text"
        value={title}
        placeholder="title"
        onChange={setTitle}
      />

      <Input
        className="mt-5"
        type="text"
        value={text}
        onChange={setText}
        placeholder="Note"
      />

      <Button
        disabled={disabled}
        type="submit"
        className={`p-2 w-2/6 ${disabled ? 'bg-gray-400' : 'bg-yell'} font-semibold text-black mt-5 hover:saturate-150 
           hover:cursor-pointer transition duration-500`}
      >
        Submit
      </Button>
    </form>
  );
};

export default AddForm;
