import express from "express";
import { getAllTodos,createTodo,deleteTodoByIndex } from "../controllers/userConroller.js";

const router=express.Router();
router.get('/',getAllTodos);
router.post('/create',createTodo);
router.delete('/:title',deleteTodoByIndex);

export default router;