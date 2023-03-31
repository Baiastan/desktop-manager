import fs, { read } from "fs";
import path from "path";
const __dirname = path.resolve();

export const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I could not find that file 🥲");

      resolve(data);
    });
  });
};
