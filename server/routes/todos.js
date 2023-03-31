import express from "express";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todos.js";
const router = express.Router();

router.get("/todos", getTodos);
router.post("/todos", addTodo);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
