import { standardText, debounceText } from '../index.js';

const updateStandardText = (text) => {
	standardText.textContent = text;
};

const updateDebounceText = (text) => {
	debounceText.textContent = text;
};

export { updateStandardText, updateDebounceText };
