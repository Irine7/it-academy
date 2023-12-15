import * as fs from 'fs';

// Получаем путь к файлу из аргументов командной строки
const filePath = process.argv[2];

// Экспортируем функцию, которая принимает путь к файлу и возвращает его содержимое
export const fileContent = (filePath: string): string => {
	return fs.readFileSync(filePath, 'utf-8');
};

// Экспортируем функцию, которая принимает путь к файлу и возвращает количество новых строк
export const newlineCount = (filePath: string): number => {
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	return calculateNewlineCount(fileContent);
};

// Добавим отдельную функцию для вычисления количества новых строк
export const calculateNewlineCount = (content: string): number => {
	return content ? content.split('\n').length - 1 : 0;
};

console.log(newlineCount(filePath));
