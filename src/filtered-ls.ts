import * as fs from 'fs';
import * as pathModule from 'path';

// Получаем аргументы командной строки помощью деструктуризации, чтобы получить третий и четвертый элементы массива, которые представляют путь к директории и расширение файла
const [, , dirPath, fileExtension] = process.argv;

// Проверяем, что оба аргумента (путь к директории и расширение файла) были переданы
if (!dirPath || !fileExtension) {
	console.error(
		'You should use this kind of extension: ts-node filtered-ls.ts /path/to/directory/'
	);
	process.exit(1);
}

// Функция для получения отфильтрованного списка файлов
export function filteredList(path: string, extension: string): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		fs.readdir(path, (error, files) => {
			if (error) {
				console.error('Error reading directory:', error);
				reject(error.message);
			} else {
				const filteredFiles = files.filter(
					(file) => pathModule.extname(file) === `.${extension}`
				);

				filteredFiles.forEach((file) => console.log(file));
				resolve(); // Теперь resolve не принимает аргументов
			}
		});
	});
}

// Вызываем функцию
filteredList(dirPath, fileExtension);
