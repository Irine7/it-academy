export const fetchData = async (text) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`${text}`);
			console.log(`Async text: ${text}`);
		}, 500);
	});
};
