import * as fs from 'fs';
import * as path from 'path';

function filterFilesByExtension(
	dir: string,
	extension: string,
	callback: Function
) {
	fs.readdir(dir, (error: unknown, files: string[]) => {
		if (error) {
			return callback(error);
		}

		const filteredFiles = files.filter(
			(file) => path.extname(file) === `.${extension}`
		);
		callback(null, filteredFiles);
	});
}

module.exports = filterFilesByExtension;
