import inquirer from 'inquirer';

const greeting = 'Hello! Let\'s try the debounce function';
const farewell = 'Thank you for using CLI. Good bye!';

const getUserInput = async () => {
	const { text } = await inquirer.prompt({
		type: 'input',
		name: 'text',
		message: 'Enter text for testing throttle:',
	});
	return text;
};

const runDebounceCLI = async () => {
	console.log(greeting);

	while (true) {
		const userInput = await getUserInput();

		// Используем debounce для задержки вывода текста
		const debouncedHandler = async (text: string) => {
			await new Promise((resolve) => setTimeout(resolve, 3000)); // Задержка вывода Async text
			console.log(`Async text: ${text}`);
		};

		// Вызываем debouncedHandler
		await debouncedHandler(userInput);

		console.log(farewell);
		break;
	}
};

runDebounceCLI();
