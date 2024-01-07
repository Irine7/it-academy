import { TaskList } from '../../domain/features/taskList';

export class RemoveTask {
	constructor(private taskList: TaskList) {}

	execute(id: number): boolean {
		return this.taskList.removeTask(id);
	}
}
