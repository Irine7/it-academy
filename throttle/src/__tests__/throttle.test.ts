import { fetchData } from '../model/model';
import { throttle } from '../controller/controller';

describe('fetchData', () => {
	it('should resolve with the correct text after a delay', async () => {
		// Устанавливаем мок-таймер, чтобы тестировать работу setTimeout
		jest.useFakeTimers();

		// Задаем текст, который мы ожидаем получить после выполнения fetchData
		const expectedText = 'test';

		// Создаем промис, чтобы дождаться завершения fetchData
		const fetchDataPromise = fetchData(expectedText);

		// Перемещаем таймер вперед на 3000 миллисекунд (время ожидания в fetchData)
		jest.advanceTimersByTime(3000);

		// Дожидаемся завершения промиса
		const result = await fetchDataPromise;

		// Утверждаем, что полученный результат соответствует ожидаемому тексту
		expect(result).toBe(expectedText);

		// Проверяем, что функция resolve была вызвана с правильным аргументом
		fetchDataPromise.then((resolvedText) => {
			expect(resolvedText).toBe(expectedText);
		});
	});
});




