import { addTaskController } from '../../user-interface/features/addTaskController';
import { getTasksController } from '../../user-interface/features/getTasksController';
import { changeStatusController } from '../../user-interface/features/changeStatusController';
import { removeTaskController } from '../../user-interface/features/removeTaskController';

export const mainController = {
	addTask: addTaskController,
	getTasks: getTasksController,
	changeStatus: changeStatusController,
	removeTask: removeTaskController,
};
