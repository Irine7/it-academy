// Получаем аргументы из командной строки (пропускаем первые два элемента - 'node' и путь к файлу)
const arguments = process.argv.slice(2);

// Преобразуем строки в числа и вычисляем их сумму
const sum = arguments.reduce((acc, curr) => acc + Number(curr), 0);

console.log(sum);

// Завершаем выполнение программы и возвращаем результат проверке
process.exit();
