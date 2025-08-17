import express from "express";
import { getAllTodos,createTodo } from "../controllers/userConroller.js";

const router=express.Router()
router.get('/',getAllTodos)
router.post('/create',createTodo)

export default router;