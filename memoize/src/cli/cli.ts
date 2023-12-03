import * as readline from 'readline';
import { MemoizeCache } from '../model/model.js';
import { memoize, myFn } from '../controller/controller.js';

const greeting = "Hello! Let's try the memoize function!";
const farewell = 'Thank you for using CLI. Good bye!';

let cache: MemoizeCache<any> = {};

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log(greeting);

// Добавляем обработчик события close
rl.on('close', () => {
	console.log(farewell);
	process.exit(0); // Завершаем процесс с кодом успешного завершения
});

const processInput = () => {
	rl.question(
		'Enter values for the function (separated by commas) or "exit" to exit the program: ',
		(input) => {
			if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
				rl.close(); // Закрываем интерфейс readline, что приведет к вызову обработчика close
			} else {
				const args = input.split(',').map((arg) => arg.trim());
				const myFnMemoize = memoize(myFn, cache);
				console.log('Function execution result:', myFnMemoize(...args));

				// Проверяем, закрыт ли readline
				if (!(rl as any).closed) {
					processInput();
				}
			}
		}
	);
};

processInput();
