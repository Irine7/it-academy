import { fetchData } from '../model/model.js';
import { updateStandardText, updateDebounceText } from '../view/view.js';

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
	const result = await fetchData(text);
	updateDebounceText(result);
}, 500);

export const handleInput = (e: Event) => {
	if(e.target instanceof HTMLInputElement) {
		const inputValue = e.target.value
		updateStandardText(inputValue);
		debounceHandler(inputValue);
	}
};
