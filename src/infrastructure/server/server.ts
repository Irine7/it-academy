import { app } from '../../infrastructure/http/app';

// Слушаем порт (получаем его из переменной окружения или по дефолту 3000)
const PORT = process.env.PORT || 3000;

export const server = app.listen(PORT, () => {
	console.log(`The server is listening the ${PORT}...`);
});
