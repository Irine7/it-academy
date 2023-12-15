// Получаем аргументы из командной строки (пропускаем первые два элемента - 'node' и путь к файлу)
// const args = process.argv.slice(2);

// // Преобразуем строки в числа и вычисляем их сумму
// export const sum = args.reduce((acc, curr) => acc + Number(curr), 0);

// console.log(sum);

export const sum = (args: number[]): number => {
	return args.reduce((acc, curr) => acc + Number(curr), 0);
};

// Для вывода суммы в консоль при вызове из командной строки
if (require.main === module) {
	const args = process.argv.slice(2).map(Number);
	console.log(sum(args));
}
