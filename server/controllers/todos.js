import fs, { readFileSync } from "fs";
import path from "path";
const __dirname = path.resolve();

const data = readFileSync(`${__dirname}/data/todos.json`);

const writeFile = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (err) => {
      if (err) {
        reject("Failed to read file");
        throw err;
      }
      resolve("success!");
    });
  });
};

export const getTodos = async (req, res) => {
  try {
    const parsed = JSON.parse(data);
    res.status(200).json(parsed);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//DONE FOR NOW
export const addTodo = async ({ body }, res) => {
  try {
    const {
      id,
      title,
      details = "",
      dateCreated,
      deadline = null,
      completed = false,
    } = body;

    console.log("Executed");

    const json = JSON.parse(data);

    const newTodo = { id, title, details, dateCreated, deadline, completed };

    const newData = [newTodo, ...json];

    await writeFile(`${__dirname}/data/todos.json`, JSON.stringify(newData));

    res.status(200).json({ success: "Todo was added!", data: newTodo });
  } catch (error) {
    res.status(505).json({ message: error.message });
  }
};

//DONE
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!data) {
      throw new Error(`Could not find the file in ${__dirname} directory`);
    }
    const json = JSON.parse(data);

    const filteredData = json.filter((el) => el.id !== id);

    await writeFile(
      `${__dirname}/data/todos.json`,
      JSON.stringify(filteredData)
    );

    res.status(200).json({ success: "Todo was deleted!", data: id });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//NEED TO WORK ON IT!
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const { completed } = req.body;

    console.log(req.body);
    console.log(id, completed);

    if (completed === undefined) throw new Error(`completed is ${completed}`);

    if (!data) {
      throw new Error(`Could not find the file in ${__dirname} directory`);
    }
    const json = JSON.parse(data);

    const newData = json.map((el) => {
      if (el.id === id) {
        return { ...el, completed: completed };
      } else {
        return el;
      }
    });

    await writeFile(`${__dirname}/data/todos.json`, JSON.stringify(newData));

    res.status(200).json({
      success: "Todo was uptated!",
      data: newData.filter((el) => el.id === id),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
