import { Todo } from '../../domain/features/todo';
import { TaskList } from '../../domain/features/taskList';

// Получаем все таски
export const getTasksFeature = (taskList: TaskList): Todo[] => {
	return taskList.getTasks();
};
