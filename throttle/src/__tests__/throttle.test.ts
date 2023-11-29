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

// describe('throttle', () => {
//   it('should call the function once after a delay', async () => {
//     jest.useFakeTimers();

//     const mockFn = jest.fn();
//     const throttledFn = throttle(mockFn, 3000);

//     // Вызываем функцию throttle дважды
//     throttledFn('first call');
//     throttledFn('second call');

//     // Перематываем таймеры на 3000 миллисекунд
//     jest.advanceTimersByTime(3000);

//     // Дожидаемся завершения асинхронной функции
//     await Promise.resolve();

//     // Проверяем, что функция была вызвана только один раз
//     expect(mockFn).toHaveBeenCalledTimes(1);

//     // Проверяем, что функция была вызвана с последним переданным аргументом
//     expect(mockFn).toHaveBeenCalledWith('second call');
//   });

//   it('should call the function twice if the delay is exceeded', async () => {
//     jest.useFakeTimers();

//     const mockFn = jest.fn();
//     const throttledFn = throttle(mockFn, 3000);

//     // Вызываем функцию throttle дважды
//     throttledFn('first call');
//     throttledFn('second call');

//     // Перематываем таймеры на 6000 миллисекунд (превышаем заданное время задержки)
//     jest.advanceTimersByTime(6000);

//     // Дожидаемся завершения асинхронной функции
//     await Promise.resolve();

//     // Проверяем, что функция была вызвана дважды
//     expect(mockFn).toHaveBeenCalledTimes(2);

//     // Проверяем, что функция была вызвана с последним переданным аргументом
//     expect(mockFn).toHaveBeenCalledWith('second call');
//   });
// });

