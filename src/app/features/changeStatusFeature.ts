import { Todo } from '../../domain/features/todo';
import { TaskList } from '../../domain/features/taskList';

// Обновляем статус задачи (выполнена/не выполнена)
export const changeStatusFeature = (id: number, taskList: TaskList): Todo[] => {
	taskList.changeStatus(id);
	const changedTask = taskList.getTasks();
	const changeTaskStatus = changedTask.filter(task => task.id === id);

	return changeTaskStatus;
};
