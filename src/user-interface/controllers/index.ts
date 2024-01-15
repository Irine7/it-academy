import { Router } from 'express';
import { addTaskController } from '../features/addTaskController';
import { getTasksController } from '../features/getTasksController';
import { changeStatusController } from '../features/changeStatusController';
import { removeTaskController } from '../features/removeTaskController';

const taskController = Router();

taskController.post('/add', addTaskController);
taskController.get('/get', getTasksController);
taskController.put('/change/:id', changeStatusController);
taskController.delete('/remove/:id', removeTaskController);

export default taskController;