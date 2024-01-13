import { Todo } from './todo';

// Реализуем новый интерфейс для для взаимодействия с задачами TaskList на основе Todo
export interface TaskList {
	addTask(task: Todo): Todo;
	getTasks(): Todo[];
	removeTask(id: number): boolean;
	changeStatus(id: number): Todo | null;
}
