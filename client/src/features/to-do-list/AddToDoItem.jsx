import { DatePicker, TimeField } from '@mui/x-date-pickers';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAddTodoMutation } from '../../store/api';
import { addNewTodo } from '../../store';
import Input from '../../components/Input';

const AddToDoItem = ({ onCloseRequest, category = 'todo' }) => {
  const [todo, setToDo] = useState('');
  const [text, setText] = useState('');
  const [disabled, setIsDisabled] = useState(true);
  const [deadline, setDeadline] = useState(null);

  const [meetingLink, setMeetingLink] = useState('');
  const [jobDescLink, setJobDescLink] = useState('');

  const [dateValue, setDateValue] = useState(null);
  const [time, setTime] = useState(null);
  const dispatch = useDispatch();
  const [addTodo, {}] = useAddTodoMutation();

  useEffect(() => {
    if (todo.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [todo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let d = {};

    if (deadline) {
      if (time === null) {
        d = dateValue.$d.toISOString();
      } else {
        d = time.$d.toISOString();
      }
    } else {
      d = null;
    }

    const dateCreated = new Date().toISOString();
    const id = uuidv4();
    const data = {
      id,
      title: todo,
      details: text,
      jobDescLink,
      meetingLink,
      category,
      dateCreated,
      deadline: d,
      completed: false,
    };

    dispatch(addNewTodo(data));

    addTodo(data);

    onCloseRequest();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center justify-center"
    >
      <h1 className="font-playfair mb-5 text-lg capitalize">
        Add a To-Do Item
      </h1>
      <Input type="text" value={todo} onChange={setToDo} placeholder="title" />
      <Input
        className="mt-2"
        type="text"
        value={text}
        placeholder="Details"
        onChange={setText}
      />
      <Input
        className="mt-2"
        type="text"
        value={jobDescLink}
        placeholder="Link to JD"
        onChange={setJobDescLink}
      />
      <Input
        className="mt-2"
        type="text"
        value={meetingLink}
        placeholder="Link to Meeting"
        onChange={setMeetingLink}
      />
      <button
        type="button"
        className="my-5 text-dark"
        onClick={() => setDeadline(!deadline)}
      >
        SET DEADLINE?
      </button>

      {deadline ? (
        <>
          {' '}
          <DatePicker
            sx={{ marginBottom: '10px' }}
            value={dateValue}
            onChange={(newValue) => setDateValue(newValue)}
          />
          <TimeField
            value={dateValue}
            onChange={(newValue) => setTime(newValue)}
          />
        </>
      ) : null}

      <button
        disabled={disabled}
        className={`p-2 w-2/6 ${disabled ? 'bg-gray-400' : 'bg-yell'} font-semibold text-black mt-5 hover:saturate-150 
         hover:cursor-pointer transition duration-500`}
      >
        Submit
      </button>
    </form>
  );
};

export default AddToDoItem;
