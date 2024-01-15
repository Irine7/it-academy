import { Request, Response } from 'express';
import { todoData } from '../../infrastructure/database/todoData';
import { getTasksFeature } from '../../app/features/getTasksFeature';

export const getTasksController = (req: Request, res: Response) => {
	const allTasks = getTasksFeature(todoData);
	res.status(200).send(allTasks);
};
