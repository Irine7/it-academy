import * as fs from 'fs';

// Получаем путь к файлу из аргументов командной строки
const filePath= process.argv[2];

// Читаем содержимое файла синхронно
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Разбиваем содержимое файла на строки и считаем их количество
const CountNewline = fileContent.split('\n').length - 1;

console.log(CountNewline);

process.exit();
