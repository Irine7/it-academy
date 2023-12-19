import * as http from 'http';

// URL передаем в качестве первого аргумента командной строки
const url = process.argv[2];

// Выполняем HTTP GET запрос
const request = http.get(url, (response) => {
	// Устанавливаем кодировку для получения строк вместо буферов
	response.setEncoding('utf8');

	// Обработка события "data"
	response.on('data', (data) => {
		// Проверяем, что данные не пусты, прежде чем выводить их в консоль
		const trimmedData = data.trim();
		if (trimmedData !== '') {
			console.log(trimmedData);
		}
	});

	// Обрабатываем "error"
	response.on('error', (error) => {
		console.error(`Произошла ошибка: ${error.message}`);
	});

	// Обрабатываем "end"
	response.on('end', () => {
		console.log('');
	});
});

// Добавляем обработчик ошибки для запроса
request.on('error', (error) => {
	console.error(`Произошла ошибка при отправке запроса: ${error.message}`);
});
