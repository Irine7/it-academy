import * as http from 'http';
import * as url from 'url';

const port = process.argv[2];

const server = http.createServer((req, res) => {
	// Проверяем, что req.url не является undefined
	if (!req.url) {
		res.writeHead(404, { 'content-type': 'text/plain' });
		res.end('Was Not Found');
		return;
	}

	// Парсим URL
	const parsedUrl = url.parse(req.url, true);

	// Получаем ISO-формат времени из строки запроса
	const isoTime = parsedUrl.query.iso as string;

	// Проверяем, что запрос направлен на /api/parsetime или /api/unixtime
	if (parsedUrl.pathname === '/api/parsetime') {
		const date = new Date(isoTime);
		// Отправляем JSON с часами, минутами и секундами
		res.writeHead(200, { 'content-type': 'application/json' });
		res.end(
			JSON.stringify({
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds(),
			})
		);
	} else if (parsedUrl.pathname === '/api/unixtime') {
		// Отправляем JSON с UNIX-временем в миллисекундах
		res.writeHead(200, { 'content-type': 'application/json' });
		res.end(
			JSON.stringify({
				unixtime: new Date(isoTime).getTime(),
			})
		);
	} else {
		// Если URL не соответствует ожидаемым, отправляем 404 ошибку
		res.writeHead(404, { 'content-type': 'text/plain' });
		res.end('Not Found');
	}
});

server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
