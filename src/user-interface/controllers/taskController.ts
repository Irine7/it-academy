import { Request, Response } from 'express';
import { todoData } from '../../infrastructure/database/todoData';

import { getTasksFeature } from '../../app/features/getTasksFeature';
import { addTaskFeature } from '../../app/features/addTaskFeature';
import { changeStatusFeature } from '../../app/features/changeStatusFeature';
import { removeTaskFeature } from '../../app/features/removeTaskFeature';

export const taskController = {
	addTask: (req: Request, res: Response) => {
		const { title, completed } = req.body;
		const newTask = addTaskFeature(title, completed, todoData);
		res.status(201).send(newTask);
	},

	getTasks: (req: Request, res: Response) => {
		const allTasks = getTasksFeature(todoData);
		res.status(200).send(allTasks);
	},

	changeStatus: (req: Request, res: Response) => {
		const taskId = parseInt(req.params.id, 10);
		const changedTask = changeStatusFeature(taskId, todoData);
		if (!changedTask) {
			return res.status(404).send('Sorry. The task does not exist');
		}
		res.status(200).send(changedTask);
	},

	removeTask: (req: Request, res: Response) => {
		const id = parseInt(req.params.id, 10);
		const deletedTask = removeTaskFeature(id, todoData);
		if (!deletedTask) {
			return res.status(404).send('Sorry. The task does not exist');
		}
		res.status(200).send(`Task ${id} was successfully eliminated`);
	},
};
