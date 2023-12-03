import { MemoizeCache } from '../model/model.js';

// Служит для оптимизации вызовов функций путем кэширования их результатов
export const memoize = <T>(
	fn: (...args: any[]) => T,
	cache: MemoizeCache<T>
) => {
	return (...args: any[]): T => {
		const key = JSON.stringify(args);
		if (cache[key] !== undefined) {
			console.log(`Fetching ${args} from cache`);
			return cache[key];
		} else {
			console.log(`Writing ${args} in cache`);
			let result = fn(...args);
			cache[key] = result;
			return result;
		}
	};
};

export const myFn = (a: number, b: string) => {
	return { a, b };
};
