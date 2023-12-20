import * as fs from 'fs';
import * as http from 'http';

// Получаем порт и имя файла из аргументов командной строки
const port = process.argv[2];
const fileName = process.argv[3];

const server = http.createServer((req, res) => {
	// Открываем поток для чтения файла
	const fileStream = fs.createReadStream(fileName);

	// Устанавливаем заголовки HTTP
	res.writeHead(200, { 'content-type': 'text/plain' });

	// Подключаем поток файла к потоку ответа
	fileStream.pipe(res);

	// Обработка ошибок чтения файла
	fileStream.on('error', (error) => {
		console.log(error.message);
		res.statusCode = 500;
		res.end('Internal Server Error');
	});
});

// Слушаем указанный порт
server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
