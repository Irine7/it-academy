const myModule = require('./mymodule');

const dir = process.argv[2];
const extension = process.argv[3];

myModule(dir, extension, (error: string, files: string[]) => {
	if (error) {
		console.error('Error:', error);
		return;
	}

	files.forEach((files) => console.log(files));
});
