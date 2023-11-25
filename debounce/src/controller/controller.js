import { fetchData } from '../model/model.js';
import { updateStandardText, updateDebounceText } from '../view/view.js';

const debounce = (fn, ms) => {
	let timer;

	return async function () {
		const fnCall = async () => {
			await fn.apply(this, arguments);
		};
		clearTimeout(timer);
		await new Promise((resolve) => {
			timer = setTimeout(resolve, ms);
		});

		await fnCall();
	};
};

const debounceHandler = debounce(async (text) => {
	const result = await fetchData(text);
	updateDebounceText(result);
}, 500);

export const handleInput = (e) => {
	updateStandardText(e.target.value);
	debounceHandler(e.target.value);
};
