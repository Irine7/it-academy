import { Todo } from '../../domain/features/todo';
import { TaskList } from '../../domain/features/taskList';

export class ChangeStatus {
	constructor(private taskList: TaskList) {}

	execute(id: number): Todo | null {
		const updatedTask = this.taskList.changeStatus(id);

		if (updatedTask === null) {
			return null;
		}

		return updatedTask;
	}
}
