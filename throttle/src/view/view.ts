import { elements } from '../client/browserUtils.js';

const updateStandardText = (text: string) => {
	if (elements.standardText) {
		elements.standardText.textContent = text;
	}
};

const updateThrottleText = (text: string) => {
	if (elements.throttleText) {
		elements.throttleText.textContent = text;
	}
};

export { updateStandardText, updateThrottleText };
