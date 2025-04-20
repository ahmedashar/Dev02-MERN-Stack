import express from 'express';
import { addTodo, getTodos, getTodo, updateTodo, replaceTodo, deleteTodo } from '../controller/todo.controller.js';

const router = express.Router();

router.post('/', addTodo)
router.get('/', getTodos)
router.get('/:id', getTodo)
router.patch('/:id', updateTodo)
router.put('/:id', replaceTodo)
router.delete('/:id', deleteTodo)


export default router;