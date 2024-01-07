import { Todo } from '../../domain/features/todo';
import { TaskList } from '../../domain/features/taskList';

export class GetTasks {
	constructor(private taskList: TaskList) {}

	execute(): Todo[] {
		return this.taskList.getTasks();
	}
}
