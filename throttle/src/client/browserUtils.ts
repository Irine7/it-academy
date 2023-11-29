export function setupBrowserElements() {
	if (typeof document !== 'undefined') {
		const input: HTMLInputElement | null = document?.querySelector(
			'input'
		) as HTMLInputElement;
		const standardText: HTMLSpanElement | null = document?.getElementById(
			'standard'
		) as HTMLSpanElement | null;
		const throttleText: HTMLSpanElement | null = document?.getElementById(
			'throttle'
		) as HTMLSpanElement | null;

		return { input, standardText, throttleText };
	}

	// Если код выполняется в среде Node.js, вернем заглушку или пробросим ошибку.
	return { input: null, standardText: null, throttleText: null };
}

const elements = setupBrowserElements();

export { elements };
