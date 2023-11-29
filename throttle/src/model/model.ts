export const fetchData = async (text: string) => {
	return new Promise<string>((resolve) => {
		setTimeout(() => {
			resolve(`${text}`);
			console.log(`Async text: ${text}`);
		}, 3000);
	});
};
