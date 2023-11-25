import { standardText, debounceText } from '../main.js'

const updateStandardText = (text) => {
	standardText.textContent = text;
};

const updateDebounceText = (text) => {
	debounceText.textContent = text;
};

export { updateStandardText, updateDebounceText };
