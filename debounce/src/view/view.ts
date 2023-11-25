import { standardText, debounceText } from '../index.js';

const updateStandardText = (text: string) => {
	// Добавляем проверки на null перед установкой textContent в функциях обновления текста:
	if (standardText) {
		standardText.textContent = text;
	}
};

const updateDebounceText = (text: string) => {
	if (debounceText) {
		debounceText.textContent = text;
	}
};

export { updateStandardText, updateDebounceText };
