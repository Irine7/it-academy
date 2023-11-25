import { handleInput } from './controller/controller.js';

const input: HTMLInputElement | null = document.querySelector(
	'input'
) as HTMLInputElement;
const standardText: HTMLSpanElement | null = document.getElementById(
	'standard'
) as HTMLSpanElement | null;
const debounceText: HTMLSpanElement | null = document.getElementById(
	'debounce'
) as HTMLSpanElement | null;

// Добавляем проверку на null перед добавлением слушателя событий в index.ts:
if (input) {
	input.addEventListener('input', handleInput);
}

export { input, standardText, debounceText };
