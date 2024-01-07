import { Todo } from './todo';

// Реализуем новый интерфейс для всех действий для TaskList на основе Todo
export interface TaskList {
	addTask(task: Todo): Todo;
	getTasks(): Todo[];
	removeTask(id: number): boolean;
	changeStatus(id: number): Todo;
}
