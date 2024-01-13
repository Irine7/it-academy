import express from 'express';
import { taskController } from '../controllers/taskController';

export const routerTodoApp = express.Router();

routerTodoApp.get('/', taskController.getTasks);
routerTodoApp.post('/', taskController.addTask);
routerTodoApp.put('/:id', taskController.changeStatus);
routerTodoApp.delete('/:id', taskController.removeTask);