import { Todo } from '../../domain/features/todo';
import { TaskList } from '../../domain/features/taskList';

// interface CreateTaskInput {
// 	title: string;
// 	completed: boolean;
// }
// export const addTaskFeature = (
// 	input: CreateTaskInput,
// 	taskList: TaskList
// ): Todo => {
// 	const newTask: Todo = {
// 		id: Math.floor(Math.random() * 100),
// 		title: input.title,
// 		completed: input.completed,
// 	};
// 	return taskList.addTask(newTask);
// };

// Добавляем новую задачи в TaskList
// export const addTaskFeature = (
// 	title: string,
// 	completed: boolean,
// 	taskList: TaskList
// ): Todo => {
// 	const newTask: Todo = {
// 		id: Math.floor(Math.random() * 100),
// 		title,
// 		completed,
// 	};
// 	// Вызываем метод addTask у объекта TaskList с аргументом newTask. И возвращаем результат этого вызова, который, является обновленным списком задач
// 	return taskList.addTask(newTask);
// };
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

