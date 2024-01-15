import { Request, Response } from 'express';
import { todoData } from '../../infrastructure/database/todoData';
import { addTaskFeature } from '../../app/features/addTaskFeature';

export const addTaskController = (req: Request, res: Response) => {
	const { title, completed } = req.body;
	const newTask = addTaskFeature(title, completed, todoData);
	res.status(201).send(newTask);
};
