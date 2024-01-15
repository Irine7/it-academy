import express from 'express';
import { mainController } from '../controllers/mainController';

export const routerTodoApp = express.Router();

routerTodoApp.get('/', mainController.getTasks);
routerTodoApp.post('/', mainController.addTask);
routerTodoApp.put('/:id', mainController.changeStatus);
routerTodoApp.delete('/:id', mainController.removeTask);