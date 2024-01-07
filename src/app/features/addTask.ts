import { Todo } from '../../domain/features/todo';
import { TaskList } from '../../domain/features/taskList';

export class AddTask {
	constructor(private taskList: TaskList) {}

	execute(task: Todo): void {
		this.taskList.addTask(task);
	}
}
