import inquirer from 'inquirer';
import { fetchData } from '../model/model.js';
import { updateDebounceText } from '../view/view.js';

const debounce = <T>(fn: (arg: T) => Promise<void>, ms: number) => {
	let timer: NodeJS.Timeout;

	return function (this: any, arg: T) {
		const fnCall = async () => {
			await fn(arg);
		};
		clearTimeout(timer);
		return new Promise<void>((resolve) => {
			timer = setTimeout(async () => {
				await fnCall();
				resolve();
			}, ms);
		});
	};
};

const debounceHandler = debounce(async (text: string) => {
	const result = await fetchData(text);
	updateDebounceText(result);
}, 500);

const handleInput = async () => {
	const userInput = await inquirer.prompt({
		type: 'input',
		name: 'text',
		message: 'Enter text:',
	});

	const inputValue = userInput.text;
	debounceHandler(inputValue);
};

handleInput();
