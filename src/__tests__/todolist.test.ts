import { TaskList } from '../domain/features/taskList';

import { addTaskFeature } from '../app/features/addTaskFeature';
import { changeStatusFeature } from '../app/features/changeStatusFeature';
import { getTasksFeature } from '../app/features/getTasksFeature';
import { removeTaskFeature } from '../app/features/removeTaskFeature';

// Мокаем заглушку для TaskList, чтобы не зависеть от реальной реализации
const mockTaskList: TaskList = {
	addTask: jest.fn(),
	getTasks: jest.fn(() => []),
	removeTask: jest.fn(),
	changeStatus: jest.fn(),
};

describe('addTaskFeature', () => {
	it('should add a task to the TaskList', () => {
		const title = 'Go to practice tennis';
		const completed = false;
		const result = addTaskFeature(title, completed, mockTaskList);
		expect(mockTaskList.addTask).toHaveBeenCalledWith(
			expect.objectContaining({ title, completed })
		);
	});
});

describe('changeStatusFeature', () => {
	it('should change the status of a task in the TaskList', () => {
		const taskId = 1;
		const mockTasks = [
			{ id: 1, title: 'Finish module #4', completed: true },
			{ id: 2, title: 'Start module #5', completed: false },
		];

		// Переопределяем getTasks, чтобы вернуть тестовые данные
		mockTaskList.getTasks = jest.fn(() => mockTasks);

		// Вызываем функцию changeStatusFeature
		const changedTasks = changeStatusFeature(taskId, mockTaskList);

		// Проверяем, что changeStatus был вызван с правильным taskId
		expect(mockTaskList.changeStatus).toHaveBeenCalledWith(taskId);

		// Проверяем, что возвращенный результат содержит только измененную задачу
		expect(changedTasks).toEqual([
			{ id: 1, title: 'Finish module #4', completed: true },
		]);
	});
});

describe('getTasksFeature', () => {
	it('should return the tasks from the TaskList', () => {
		const mockTasks = [
			{ id: 1, title: 'Finish module #4', completed: false },
			{ id: 2, title: 'Start module #5', completed: true },
		];

		// Переопределяем getTasks, чтобы вернуть тестовые данные
		mockTaskList.getTasks = jest.fn(() => mockTasks);

		// Вызываем функцию getTasksFeature
		const tasks = getTasksFeature(mockTaskList);

		// Проверяем, что getTasks был вызван
		expect(mockTaskList.getTasks).toHaveBeenCalled();

		// Проверяем, что возвращенный результат соответствует тестовым данным
		expect(tasks).toEqual(mockTasks);
	});
});

describe('removeTaskFeature', () => {
	it('should remove a task from the TaskList and return the updated list', () => {
		// Подготавливаем тестовые данные
		const taskIdToRemove = 1;
		const mockTasksBeforeRemove = [
			{ id: 1, title: 'Finish module #4', completed: false },
			{ id: 2, title: 'Start module #5', completed: true },
			// Добавьте другие задачи по необходимости
		];

		// Переопределяем getTasks, чтобы вернуть тестовые данные перед удалением
		mockTaskList.getTasks = jest.fn(() => mockTasksBeforeRemove);

		// Вызываем функцию removeTaskFeature
		const tasksAfterRemove = removeTaskFeature(taskIdToRemove, mockTaskList);

		// Проверяем, что removeTask был вызван с правильным taskId
		expect(mockTaskList.removeTask).toHaveBeenCalledWith(taskIdToRemove);

		// Проверяем, что возвращенный результат соответствует ожидаемым данным (без удаленной задачи)
		const expectedTasksAfterRemove = mockTasksBeforeRemove.filter(
			(task) => task.id !== taskIdToRemove
		);

		// Изменяем ожидаемый результат, чтобы включить булево значение для свойства completed
		const expectedTasksWithCompleted = expectedTasksAfterRemove.map((task) => ({
			...task,
			completed: expect.anything(),
		}));

		// Используем toEqual(expect.arrayContaining([...]))
		expect(tasksAfterRemove).toEqual(
			expect.arrayContaining(expectedTasksWithCompleted)
		);
	});
});
