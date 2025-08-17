import { uuid } from "uuidv4";
import Todo from "../models/todoModel.js";

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().lean();
    res.status(200).json({
      status:"success",
      data:{
        numberOfTodos:todos.length,
        todos
      }
    });
  } catch (err) {
    console.log(err.message);
  }
};
const createTodo = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) throw new Error("no todo to add");
    const todoExists = await Todo.findOne({ name: name }).lean();
    if (todoExists) throw new Error("todo is already existed");
    const todo = await Todo.create({
      name,
      uuid: uuid(),
    });
    res.status(200).json({
      status: "success",
      data: todo,
    });
  } catch (err) {
    console.log(err.message);
    res.status(409).json({
      status: "failed",
      message:err.message
    });
  }
};
export { createTodo, getAllTodos };
