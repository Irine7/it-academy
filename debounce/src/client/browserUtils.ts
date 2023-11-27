export function setupBrowserElements() {
	if (typeof document !== 'undefined') {
		const input: HTMLInputElement | null = document?.querySelector(
			'input'
		) as HTMLInputElement;
		const standardText: HTMLSpanElement | null = document?.getElementById(
			'standard'
		) as HTMLSpanElement | null;
		const debounceText: HTMLSpanElement | null = document?.getElementById(
			'debounce'
		) as HTMLSpanElement | null;

		return { input, standardText, debounceText };
	}

	// Если код выполняется в среде Node.js, вернем заглушку или бросим ошибку.
	return { input: null, standardText: null, debounceText: null };
}

const elements = setupBrowserElements();

export { elements };
