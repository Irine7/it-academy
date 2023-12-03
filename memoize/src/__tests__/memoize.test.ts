import { memoize } from '../controller/controller';

describe('memoize function', () => {
	// Тест на корректность кэширования результатов
	it('caches results correctly', () => {
		const fn = jest.fn((a, b) => a + b);
		const cache: Record<string, any> = {};
		const memoizedFn = memoize(fn, cache);

		// Первый вызов
		const result1 = memoizedFn(1, 2);
		// Второй вызов с теми же аргументами, результат должен быть взят из кэша
		const result2 = memoizedFn(1, 2);

		expect(fn).toHaveBeenCalledTimes(1); // Функция должна быть вызвана только один раз
		expect(result1).toBe(3); // Результат первого вызова
		expect(result2).toBe(3); // Результат второго вызова (из кэша)

		// Проверяем, что аргументы были записаны в кэш
		const cacheKey = JSON.stringify([1, 2]);
		expect(cache[cacheKey]).toBeDefined();
	});

	it('caches arguments correctly', () => {
		const fn = jest.fn((a, b) => 'abc');
		const cache: Record<string, any> = {};
		const memoizedFn = memoize(fn, cache);

		// Первый вызов
		const arg1 = 'abc';
		const arg2 = 123;
		const result1 = memoizedFn(arg1, arg2);

		// Второй вызов с теми же аргументами, результат должен быть взят из кэша
		const result2 = memoizedFn(arg1, arg2);

		expect(fn).toHaveBeenCalledTimes(1); // Функция должна быть вызвана только один раз
		expect(result1).toBe('abc'); // Результат первого вызова
		expect(result2).toBe('abc'); // Результат второго вызова (из кэша)

		// Проверяем, что оба аргумента были записаны в кэш
		const cacheKey = JSON.stringify([arg1, arg2]);
		expect(cache[cacheKey]).toBeDefined();
	});
});
