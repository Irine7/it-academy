import { Todo } from '../../domain/features/todo';
import { TaskList } from '../../domain/features/taskList';

let database: Todo[] = [];

export const todoData: TaskList = {
	// Сохраняем task в database
	addTask: (task) => {
		// Генерируем новый id для каждой задачи
		let id = Math.floor(Math.random() * 100);
		task.id = id;
		database.push(task);
		return task;
	},

	// Получаем все tasks из database
	getTasks: () => database,

	// Меняем статус task (сделано/не сделано - для этого проверяем completed)
	changeStatus: (id) => {
		const task = database.find((task) => task.id === id);
		if (!task) {
			return null;
		}
		task.completed = !task.completed;
		return task;
	},

	// Удаляем task
	removeTask: (id) => {
		const taskId = database.findIndex((task) => task.id === id);
		// Если не находим task c указанным id - возвращаем false
		if (taskId === -1) {
			return false;
		}
		// Если задача была найдена, то методом splice удаляем один элемент из массива по указанному индексу taskId
		database.splice(taskId, 1);
		return true;
	},
};
