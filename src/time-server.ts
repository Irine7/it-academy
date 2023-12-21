// Net - модуль для создания TCP сервера
import * as net from 'net';

// Получаем порт из аргументов командной строки
const port: number = parseInt(process.argv[2], 10) || 3000;

// Создаем TCP сервер
const server = net.createServer((socket) => {
	// Функция обработки нового соединения

	// Получаем текущую дату и время в формате "YYYY-MM-DD hh:mm"
	const currentDate = new Date();
	const formattedDate = `${currentDate.getFullYear()}-${padZero(
		currentDate.getMonth() + 1
	)}-${padZero(currentDate.getDate())} ${padZero(
		currentDate.getHours()
	)}:${padZero(currentDate.getMinutes())}\n`;

	// Выводим данные в сокет
	socket.write(formattedDate);

	// Закрываем соединение
	socket.end();
});

// Слушаем указанный порт
server.listen(port);

console.log(`TCP was run on: ${port}`);

// Функция для добавления нулей к числу, если оно меньше 10
export function padZero(num: number): string {
	return num < 10 ? `0${num}` : num.toString();
}
