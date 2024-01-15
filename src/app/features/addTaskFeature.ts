import { Todo } from '../../domain/features/todo';
import { TaskList } from '../../domain/features/taskList';

// функция addTaskFeature создает новую задачу, добавляет её в список с использованием метода addTask объекта TaskList и возвращает добавленную задачу
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

