import { HttpError } from "../errorsHandler/customError.js";
import Todo from "../models/todoModel.js";

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().lean();
    res.status(200).json({
      status: "success",
      data: {
        numberOfTodos: todos.length,
        todos,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};
const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) throw new Error("no todo to add");
    const todoExists = await Todo.findOne({ title: title }).lean();
    if (todoExists) throw new Error("todo is already existed");
    const todo = await Todo.create({
      title:title
    });
    res.status(200).json({
      status: "success",
      data: todo,
    });
  } catch (err) {
    console.log(err.message);
    res.status(409).json({
      status: "failed",
      message: err.message,
    });
  }
};
const deleteTodoByIndex = async (req, res) => {
  try {
    const title = req.params.title;
    if (!title) throw new Error("index is missed", 401);
    const deletedTodo = await Todo.findOneAndDelete({ title });
    if (!deletedTodo) throw new HttpError("title is not found", 404);
    res.status(200).json({
      status:"success",
      data:deletedTodo
    });
  } catch (error) {
    res.status(error.status).json({
      status: "failed",
      message: error.message,
    });
  }
};
export { createTodo, deleteTodoByIndex, getAllTodos };
