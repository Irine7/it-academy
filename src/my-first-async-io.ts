import * as fs from 'fs';

// Получаем путь к файлу из аргументов командной строки
const filePath: string | undefined = process.argv[2];

// Проверяем наличие пути к файлу
if (!filePath) {
	console.error('The path not found');
	process.exit(1);
}
// Асинхронно читаем содержимое файла
// NodeJS.ErrnoException - это объект ошибки, который может возникнуть в результате операции чтения файла. Он может содержать информацию о том, почему операция не удалась
fs.readFile(filePath, 'utf-8', (err: NodeJS.ErrnoException | null, fileContent: string) => {
	if (err) {
		console.error(err);
		return;
	}

	// Разбиваем содержимое файла на строки и считаем их количество
	const CountNewline = fileContent.split('\n').length - 1;

	console.log(CountNewline);
});
