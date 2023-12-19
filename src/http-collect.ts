import * as http from 'http';

// URL передаем в качестве первого аргумента командной строки
const url = process.argv[2];

let resData = '';

// Выполняем HTTP GET запрос
const request = http.get(url, (response) => {
	response.setEncoding('utf-8');

	// Обрабатываем "data"
	response.on('data', (data) => {
		resData += data; // Добавляем данные к полученным ранее
	});

	// Обработка события "error"
	response.on('error', (error) => {
		console.error(`An error has occurred: ${error.message}`);
	});

	// Обработка события "end"
	response.on('end', () => {
		// Выводим количество символов и сами символы
		console.log(resData.length);
		console.log(resData);
	});
});

// Обработчик ошибки для запроса
request.on('error', (error) => {
	console.error(
		`An error occurred while sending the request: ${error.message}`
	);
});