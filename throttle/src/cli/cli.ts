import inquirer from 'inquirer';

const greeting = 'Hello! Let\'s try the throttle function';
const farewell = 'Thank you for using CLI. Good bye!';

const getUserInput = async () => {
	const { text } = await inquirer.prompt({
		type: 'input',
		name: 'text',
		message: 'Enter text for testing throttle:',
	});
	return text;
};

const runCLI = async () => {
	console.log(greeting);

	while (true) {
		const userInput = await getUserInput();

		// Используем setTimeout для задержки вывода текста:
		const throttledHandler = async (text: string) => {
			await new Promise((resolve) => setTimeout(resolve, 3000)); // Задержка вывода Async text:
			console.log(`Async text: ${text}`);
		};

		// Вызываем throttleHandler
		await throttledHandler(userInput);

		const { exit } = await inquirer.prompt({
			type: 'confirm',
			name: 'exit',
			message: 'Do you want to make another try?',
		});

		if (!exit) {
			break;
		}
	}
	console.log(farewell);
};

runCLI();
