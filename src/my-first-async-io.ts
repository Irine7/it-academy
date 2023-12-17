import * as fs from 'fs';

// Получаем путь к файлу из аргументов командной строки
const filePath: string | undefined = process.argv[2];

// Здесь асинхронно считаем строки
export function countLines(path: string) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf-8', (error, fileContent) => {
			if (error) {
				console.error('Error reading file:', error); // Добавляем вывод ошибки в консоль
				reject(error.message);
			} else {
				const countNewline = fileContent.split('\n').length - 1;
				resolve(countNewline);
			}
		});
	});
}

const calculateLines = async () => {
	try {
		const result = await countLines(filePath);
		console.log(result);
	} catch (error) {
		console.error(`Error processing the file: ${error}`);
	}
};

// Проверяем, передан ли путь к файлу в аргументах командной строки
if (filePath) {
	calculateLines();
} else {
	// Выводим сообщение, если путь к файлу не передан
	console.error('Please provide the file path in the command line arguments');
}
