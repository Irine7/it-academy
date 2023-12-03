// Создаем обобщенный дженерик для объекта кэша
export type MemoizeCache<T> = {
	[key: string]: T;
};
