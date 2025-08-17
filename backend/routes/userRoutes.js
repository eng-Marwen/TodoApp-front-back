import express from "express";
import { getAllTodos,createTodo,deleteTodoByIndex } from "../controllers/userConroller.js";

const router=express.Router();
router.get('/',getAllTodos);
router.post('/create',createTodo);
router.delete('/:idx',deleteTodoByIndex);

export default router;