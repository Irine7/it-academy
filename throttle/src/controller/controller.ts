import { elements } from '../client/browserUtils.js';
import { updateThrottleText } from '../view/view.js';

export const handleInput = (e: Event) => {
	if (e.target instanceof HTMLInputElement) {
		const inputValue = e.target.value;
		updateStandardText(inputValue);
		throttleHandler(inputValue);
	}
};

export const updateStandardText = (text: string) => {
	console.log(`Standard text: ${text}`);
	if (elements.standardText) {
		elements.standardText.textContent = text;
	}
};

type ThrottleFunction<T> = (arg: T) => Promise<void>;

export const throttle = <T>(fn: ThrottleFunction<T>, ms: number) => {
	let isThrottled = false;
	let args: T | undefined;

	const fnCall = async () => {
		if (args !== undefined) {
			isThrottled = true;
			await fn(args);
			args = undefined;
			setTimeout(() => {
				if (args !== undefined) {
					fnCall();
				}
				isThrottled = false;
			}, ms);
		}
	};

	return function (this: any, arg: T) {
		if (!isThrottled) {
			args = arg;
			fnCall();
			updateThrottleText(String(arg)); // Преобразуем аргумент к строке
		} else {
			args = arg;
		}
	};
};

const throttleHandler = throttle(async (text: string) => {
	console.log(`Async text: ${text}`);
	if (elements.throttleText) {
		// Переместим установку текста внутрь setTimeout, чтобы дать время накопиться и проверим на null
		setTimeout(() => {
			if (elements.throttleText) {
				elements.throttleText.textContent = text;
			}
		}, 0);
	}
}, 3000);
