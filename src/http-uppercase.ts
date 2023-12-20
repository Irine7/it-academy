import * as http from 'http';
import map from 'through2-map';

const port = process.argv[2];

const server = http.createServer((req, res) => {
	// Проверяем, что запрос является POST-запросом
	if (req.method !== 'POST') {
		res.writeHead(405, { 'content-type': 'text/plain' });
		res.end('This method is not allowed');
		return;
	}

	// Используем through2-map для преобразования данных в верхний регистр
	req
		.pipe(map((chunk: Buffer) => chunk.toString().toUpperCase()))
		.pipe(res as any);
});

// Слушаем указанный порт
server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
