import { Todo } from '../../domain/features/todo';
import { TaskList } from '../../domain/features/taskList';

export const addTaskFeature = (
	title: string,
	completed: boolean,
	taskList: TaskList
): Todo => {
	const newTask: Todo = {
		id: Math.floor(Math.random() * 100),
		title,
		completed,
	};
	return taskList.addTask(newTask);
};

