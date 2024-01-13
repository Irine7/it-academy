import { Todo } from '../../domain/features/todo';
import { TaskList } from '../../domain/features/taskList';

// Удаление выполненной задачи
export const removeTaskFeature = (id: number, taskList: TaskList): Todo[] => {
	// Удаляем задачу по id
	taskList.removeTask(id);

	// Обновляем список оставшихся задач
	return taskList.getTasks();
};
