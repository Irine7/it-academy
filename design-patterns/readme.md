### MVC

**Model-View-Controller** is a way of organizing code that involves separating blocks that are responsible for solving different tasks. One block is responsible for the **application data**, another is responsible for the **appearance**, and the third **controls the operation** of the application.

**MVC** is the key to understanding dynamic web application development. This pattern involves separating business logic from the interface.

## MVC Components:

- **Model** - this component is responsible for the data and also determines the structure of the application. For example, if you are building a To-Do application, the `model` component code will define the task list and individual tasks.
- **View** - this component is responsible for user interaction. That is, the `view` component code defines the appearance of the application and how it can be used.
- **Controller** - this component is responsible for the connection between `model` and `view`. The `controller` component code determines how the site responds to user actions. Essentially, this is the brain of an MVC application.

## General overview of the project

The demo project will consist of three main components: a controller, a view, and a model. Each of them has its own area of responsibility and is focused on solving a specific problem.

**The TodoModel** is responsible for working with data. In client-side JS, this means performing Ajax operations. One of the advantages of the MVC pattern is that all interaction with a data source, for example, with a server, is concentrated in one place. This approach helps programmers who are not familiar with the project to understand it. The model in this design pattern is solely concerned with working with JSON or objects that come from the server.

If, when implementing MVC, we violate the above-described separation of components' responsibilities, we will get one of the possible MVC anti-patterns. The model should not work with HTML. The view should not make Ajax requests. The controller should play the role of an intermediary without worrying about the implementation details of other components.

**The TodoView** interacts with the DOM. DOM is a browser API that is used to work with HTML. In MVC, only the view is responsible for changes to the DOM. The view can handle hooking up UI event handlers, but event handling is the responsibility of the controller. The main task solved by a view is to control what the user sees on the screen. In our project, the view will perform DOM manipulation using JavaScript.

**The TodoController** handles events and serves as an intermediary between the view and the model. It finds out what happened when the user performs an action (for example, clicking a button or pressing a key on the keyboard). The logic of client applications can be implemented in the controller. In larger systems where many events need to be processed, this element can be broken down into several modules. The controller is the entry point for events and the only intermediary between the view and the data.


### A simple example based on an app TODO LIST (sprint 1-1)

## Model
_TodoModel.ts:_
`
export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export class Task implements Todo {
	id: number;
	title: string;
	completed: boolean;
	constructor(id: number, title: string, completed: boolean) {
		this.id = id;
		this.title = title;
		this.completed = completed;
	}
}

const newTask = new Task(1, 'New Task', false);

export class TaskList {
	tasks: Task[] = [];
	addTask(task: Todo) {
		this.tasks.push(task);
	}
	getTasks() {
		return this.tasks;
	}

	removeTask(id: number) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
	}

	changeStatus(id: number) {
		this.tasks = this.tasks.map((task) => {
			if (task.id === id) {
				task.completed = !task.completed;
			}
			return task;
		})
	}
}

const newArrTask = new TaskList();
newArrTask.addTask(newTask);
`
## View
_TodoView.ts:_
`
import { TaskList, Todo, Task } from '../todo/index.js';

const input: HTMLInputElement | null = document.querySelector('.task-input');
const button: HTMLButtonElement | null = document.querySelector('.task-add');
const list: HTMLUListElement | null = document.querySelector('.list');

const tasks = new TaskList();

button?.addEventListener('click', () => {
	if (!input?.value) return;
	const newTask: Todo = {
		id: tasks.tasks.length + 1,
		title: input.value,
		completed: false,
	};

	const task = new Task(newTask.id, newTask.title, newTask.completed);
	tasks.addTask(task);

	const li = document.createElement('li');
	li.innerHTML = `
			<input class="checkbox" type="checkbox" ${task.completed ? 'checked' : ''} />
			${task.title}
			<button class="remove">X</button>
		`;
	const btnRemove = li.querySelector('.remove');
	btnRemove?.addEventListener('click', () => {
		tasks.removeTask(task.id);
		list?.removeChild(li);
	});
	const checkbox = li.querySelector('.checkbox');
	checkbox?.addEventListener('change', () => {
		tasks.changeStatus(task.id);
		console.log(task);
	});
	input.value = '';
	list?.appendChild(li);
});
`

## Controller
_TodoController.ts:_
`
export class Task implements Todo {
	id: number;
	title: string;
	completed: boolean;
	constructor(id: number, title: string, completed: boolean) {
		this.id = id;
		this.title = title;
		this.completed = completed;
	}
}

const newTask = new Task(1, 'New Task', false);
`