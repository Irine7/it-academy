const fs = require('fs');

// Получаем путь к файлу из аргументов командной строки
const filePath = process.argv[2];

// Асинхронно читаем содержимое файла
fs.readFile(filePath, 'utf-8', (err, fileContent) => {
	if (err) {
		console.error(err);
		return;
	}

	// Разбиваем содержимое файла на строки и считаем их количество
	const CountNewline = fileContent.split('\n').length - 1;

	console.log(CountNewline);
});