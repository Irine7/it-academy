import { Request, Response } from 'express';
import { todoData } from '../../infrastructure/database/todoData';
import { removeTaskFeature } from '../../app/features/removeTaskFeature';

export const removeTaskController = (req: Request, res: Response) => {
	const id = parseInt(req.params.id, 10);
	const deletedTask = removeTaskFeature(id, todoData);
	if (!deletedTask) {
		return res.status(404).send('Sorry. The task does not exist');
	}
	res.status(200).send(`Task ${id} was successfully eliminated`);
};
