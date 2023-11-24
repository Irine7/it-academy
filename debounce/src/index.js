// First option

const input = document.querySelector('input');
const standardText = document.getElementById('standard');
const debounceText = document.getElementById('debounce');

const debounce = (fn, ms) => {
	let timer;

	return async function () {
		const fnCall = () => {
			fn.apply(this, arguments);
		};
		clearTimeout(timer);
		await new Promise((resolve) => {
			timer = setTimeout(resolve, ms);
		});

		fnCall();
	};
};

const debounceHandler = debounce((text) => {
	debounceText.textContent = text;
}, 500);

input.addEventListener('keyup', (e) => {
	standardText.textContent = e.target.value;
	debounceHandler(e.target.value);
});



// Second option

// const debounce = (fn, ms) => {
// 	let timeout;

// 	return async function () {
// 		const fnCall = () => {
// 			fn.apply(this, args);
// 		};
// 		clearTimeout(timeout);

// 		await new Promise((resolve) => {
// 			timeout = setTimeout(resolve, ms);
// 		});

// 		fnCall();
// 	};
// };

// async function onChange(e) {
// 	console.log(e.target.value);
// }

// onChangeDebounced = debounce(onChange, 500);

// document.getElementById('search').addEventListener('keyup', onChangeDebounced);
