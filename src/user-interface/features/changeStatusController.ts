import { Request, Response } from 'express';
import { todoData } from '../../infrastructure/database/todoData';
import { changeStatusFeature } from '../../app/features/changeStatusFeature';

/*
const taskId = parseInt(req.params.id, 10):
Происходит преобразование параметра id, полученного из запроса (req.params.id), в целое число. Это делается с помощью функции parseInt. Второй аргумент 10 указывает на систему счисления (десятичная). Это преобразование полезно, когда ожидается, что id представлен в числовом формате, и вы хотите использовать его как число в коде.
Это служит проверкой на NaN.
*/

export const changeStatusController = (req: Request, res: Response) => {
	const taskId = parseInt(req.params.id, 10);
	const changedTask = changeStatusFeature(taskId, todoData);
	if (!changedTask) {
		return res.status(404).send('Sorry. The task does not exist');
	}
	res.status(200).send(changedTask);
};
