import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Todo name is required"], // cannot be empty
    trim: true, // removes leading/trailing spaces
    minlength: [1, "Todo name cannot be empty"], // ensures at least 1 char
    unique: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model("Todo", todoSchema, "todos");
export default Todo;
