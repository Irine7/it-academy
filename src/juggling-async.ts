import * as http from 'http';

const urls = process.argv.slice(2);

// Функция для выполнения асинхронного HTTP GET запроса
async function fetchData(url: string): Promise<string> {
	return new Promise((resolve, reject) => {
		http.get(url, (response) => {
			let data = '';

			// Обрабатываем "data"
			response.on('data', (chunk) => {
				data += chunk;
			});

			// Обрабатываем "end"
			response.on('end', () => {
				resolve(data); // Резолвим промис с полученными данными
			});

			// Обрабатываем "error"
			response.on('error', (error) => {
				reject(`An error has occurred: ${error.message}`);
			});
		});
	});
}

// Функция для выполнения асинхронных HTTP GET запросов к каждому URL
async function fetchDataFromAllUrls() {
	try {
		// Массив промисов для выполнения запросов
		const promises = urls.map((url) => fetchData(url));

		// Ожидаем завершения всех запросов
		const results = await Promise.all(promises);

		// Выводим содержимое каждого адреса в порядке, в котором получены URL
		results.forEach((content, index) => {
			console.log(content);
		});
	} catch (error) {
		console.error(error);
	}
}

// Вызываем функцию для выполнения асинхронных запросов
fetchDataFromAllUrls();
