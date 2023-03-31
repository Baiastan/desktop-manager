import fs, { readFileSync } from "fs";
import path from "path";
const __dirname = path.resolve();

const data = readFileSync(`${__dirname}/data/links.json`);

// const readFile = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) {
//         reject("Failed to read file");
//         throw err;
//       }

//       resolve(data);
//     });
//   });
// };

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

export const getLinks = async (req, res) => {
  try {
    const parsed = JSON.parse(data);
    res.status(200).json(parsed);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addLink = async (req, res) => {
  try {
    const { id, title, link, text, category } = req.body;

    if (!data) {
      throw new Error(`Could not find the file in ${__dirname} directory`);
    }
    const json = JSON.parse(data);

    const newLink = { id, title, link, text, category };

    const newData = [newLink, ...json];

    await writeFile(`${__dirname}/data/links.json`, JSON.stringify(newData));

    res.status(200).json({ success: "Link was added!", data: newLink });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteLink = async (req, res) => {
  try {
    const { id } = req.params;

    if (!data) {
      throw new Error(`Could not find the file in ${__dirname} directory`);
    }
    const json = JSON.parse(data);

    const filteredData = json.filter((el) => el.id !== id);

    await writeFile(
      `${__dirname}/data/links.json`,
      JSON.stringify(filteredData)
    );

    res.status(200).json({ success: "Link was deleted!", data: id });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
