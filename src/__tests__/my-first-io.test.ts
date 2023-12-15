import * as fs from 'fs';
import { fileContent, calculateNewlineCount } from '../my-first-io';

jest.mock('fs');

describe('Testing fileContent and newlineCount functions', () => {
	it('Check if fileContent returns the correct content of a given file', () => {
		// Путь к временному файлу для теста
		const mockFilePath = 'mockFile.txt';
		const mockFileContent = 'Lorem\nLorem\nLorem\nLorem\nLorem\n';

		// Здесь устанавливаем поведение mock функции
		(fs.readFileSync as jest.Mock).mockReturnValue(mockFileContent);

		// Вызываем функцию fileContent с явным указанием пути к файлу
		const content = fileContent(mockFilePath);

		// Проверяем, соответствует ли возвращаемое значение ожидаемому содержимому
		expect(content).toEqual(mockFileContent);
	});

	it('Check if calculateNewlineCount returns the correct number of newlines', () => {
		// Тестовый контент (убираем символ новой строки в конце)
		const testContent = 'Line 1\nLine 2\nLine 3';

		// Вызываем функцию calculateNewlineCount
		const count = calculateNewlineCount(testContent);

		// Проверяем, соответствует ли возвращаемое значение ожидаемому количеству строк
		expect(count).toEqual(2);
	});
});
