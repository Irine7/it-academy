import { elements } from '../client/browserUtils.js';

export const handleInput = (e: Event) => {
	if (e.target instanceof HTMLInputElement) {
		const inputValue = e.target.value;
		updateStandardText(inputValue);
		debounceHandler(inputValue);
	}
};

export const updateStandardText = (text: string) => {
	console.log(`Standard text: ${text}`);
	if (elements.standardText) {
		elements.standardText.textContent = text;
	}
};

type DebounceFunction<T> = (arg: T) => Promise<void>;

const debounce = <T>(fn: DebounceFunction<T>, ms: number) => {
	let timer: NodeJS.Timeout;

	return function (this: any, arg: T) {
		const fnCall = async () => {
			await fn(arg);
		};
		clearTimeout(timer);
		return new Promise<void>((resolve) => {
			timer = setTimeout(async () => {
				await fnCall();
				resolve();
			}, ms);
		});
	};
};

const debounceHandler = debounce(async (text: string) => {
	console.log(`Async text: ${text}`);
	if (elements.debounceText) {
		elements.debounceText.textContent = text;
	}
}, 500);
