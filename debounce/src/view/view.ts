import { elements } from '../client/browserUtils.js';

const updateStandardText = (text: string) => {
	if (elements.standardText) {
		elements.standardText.textContent = text;
	}
};

const updateDebounceText = (text: string) => {
	if (elements.debounceText) {
		elements.debounceText.textContent = text;
	}
};

export { updateStandardText, updateDebounceText };
