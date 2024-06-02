import fs from "fs";
import path from "path";
import shortid from "shortid";
import { addAutoTodo } from "../controllers/todos.js";
const __dirname = path.resolve();

export const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I could not find that file 🥲");

      resolve(data);
    });
  });
};

export const createAutoTodoTask = (title) => {
  console.log("Running a task every month");

  const dateCreated = new Date().toISOString();
  const deadlineDate = new Date(); // Get the current date and time
  deadlineDate.setHours(deadlineDate.getHours() + 24 * 30); // Add 24 hours to the current date and time
  const deadline = deadlineDate.toISOString(); // Convert the deadline date to an ISO string

  const newTodo = {
    id: shortid.generate(),
    title,
    details: "",
    dateCreated,
    deadline,
    completed: false,
  };

  addAutoTodo(newTodo);
};
